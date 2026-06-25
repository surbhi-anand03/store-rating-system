const Store = require("../models/Store");
const Rating = require("../models/Rating");

exports.getAllStores = async (
  req,
  res
) => {

  try {

    const { search } =
      req.query;

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
      await Store.find(query);

    const result =
      await Promise.all(

        stores.map(
          async (store) => {

            const myRating =
              await Rating.findOne({
                user: req.user.id,
                store: store._id
              });

            return {
              ...store.toObject(),
              userRating:
                myRating?.rating || null
            };

          }
        )
      );

    res.json(result);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

