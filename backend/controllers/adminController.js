const User = require("../models/User");
const Store = require("../models/Store");
const Rating = require("../models/Rating");
const bcrypt = require("bcryptjs");

exports.dashboard = async (req, res) => {

  try {

    const totalUsers =
      await User.countDocuments();

    const totalStores =
      await Store.countDocuments();

    const totalRatings =
      await Rating.countDocuments();

    res.json({
      totalUsers,
      totalStores,
      totalRatings
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.createUser = async (req, res) => {

  try {

    const {
      name,
      email,
      password,
      address,
      role
    } = req.body;

    const allowedRoles =
      ["admin", "user", "owner"];

    if (!allowedRoles.includes(role)) {
      return res.status(400).json({
        message: "Invalid role",
      });
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,16}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be 8-16 chars, contain one uppercase letter and one special character",
      });
    }

    const existing =
      await User.findOne({ email });

    if (existing) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({
        name,
        email,
        password: hashedPassword,
        address,
        role
    });

    const responseUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        role: user.role,
        createdAt: user.createdAt
    };


    res.status(201).json(responseUser);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getUsers = async (req, res) => {

  try {

    const {
      search,
      role,
      sort = "name",
      order = "asc"
    } = req.query;

    let query = {};

    if (role) {
      query.role = role;
    }

    if (search) {
      query.$or = [
        {
          name: {
            $regex: search,
            $options: "i"
          }
        },
        {
          email: {
            $regex: search,
            $options: "i"
          }
        },
        {
          address: {
            $regex: search,
            $options: "i"
          }
        }
      ];
    }

    const users =
      await User.find(query)
      .select("-password")
      .sort({
        [sort]:
          order === "asc"
          ? 1
          : -1
      });

    res.json(users);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

// exports.getUserDetails =
// async (req, res) => {

//   try {

//     const user =
//       await User.findById(
//         req.params.id
//       ).select("-password");

//     if (!user) {

//       return res.status(404).json({
//         message: "User not found"
//       });

//     }

//     res.json(user);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message
//     });

//   }
// };

exports.getUserDetails =
  async (req, res) => {
    try {

      const user =
        await User.findById(
          req.params.id
        ).select("-password");

      if (!user) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      let response =
        user.toObject();

      if (user.role === "owner") {

        const store =
          await Store.findOne({
            owner: user._id,
          });

        response.storeRating =
          store?.averageRating || 0;
      }

      res.json(response);

    } catch (error) {

      res.status(500).json({
        message: error.message,
      });

    }
  };

// exports.createStore = async (
//   req,
//   res
// ) => {

//   try {

//     const {
//       name,
//       email,
//       address,
//       owner
//     } = req.body;

//     const store =
//       await Store.create({
//         name,
//         email,
//         address,
//         owner
//       });

//     res.status(201).json(store);

//   } catch (error) {

//     res.status(500).json({
//       message: error.message
//     });

//   }
// };

exports.createStore = async (req, res) => {
  try {

    console.log("BODY:", req.body);

    const {
      name,
      email,
      address,
      owner
    } = req.body;

    const existingStore =
      await Store.findOne({ email });

    if (existingStore) {
      return res.status(400).json({
        message: "Store already exists",
      });
    }

    const ownerUser =
      await User.findById(owner);

    if (
      !ownerUser ||
      ownerUser.role !== "owner"
    ) {
      return res.status(400).json({
        message:
          "Selected user is not a store owner",
      });
    }

    const store = await Store.create({
      name,
      email,
      address,
      owner
    });

    console.log("CREATED STORE:", store);

    res.status(201).json(store);

  } catch (error) {

    console.log("STORE ERROR:", error);

    res.status(500).json({
      message: error.message
    });

  }
};

exports.getStores = async (
  req,
  res
) => {

  try {

    const {
      search,
      sort = "name",
      order = "asc"
    } = req.query;

    let query = {};

    if (search) {

      query.$or = [
        {
          name: {
            $regex: search,
            $options: "i"
          }
        },
        {
          address: {
            $regex: search,
            $options: "i"
          }
        }
      ];

    }

    const stores =
      await Store.find(query)
      .populate(
        "owner",
        "name email"
      )
      .sort({
        [sort]:
          order === "asc"
          ? 1
          : -1
      });

    res.json(stores);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

