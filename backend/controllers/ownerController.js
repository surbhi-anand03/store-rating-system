const Store = require("../models/Store");
const Rating = require("../models/Rating");

exports.getDashboard = async (req, res) => {
  try {

    const store = await Store.findOne({
      owner: req.user.id
    });

    if (!store) {
      return res.status(404).json({
        message: "Store not found"
      });
    }

    const ratings =
      await Rating.find({
        store: store._id
      })
      .populate(
        "user",
        "name email"
      );

    res.json({
      storeName: store.name,
      averageRating:
        store.averageRating,
      ratings
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};