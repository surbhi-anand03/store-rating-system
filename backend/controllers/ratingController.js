const Rating = require("../models/Rating");
const Store = require("../models/Store");

exports.submitRating = async (
  req,
  res
) => {

  try {

    const {
      storeId,
      rating
    } = req.body;

    if (
      rating < 1 ||
      rating > 5
    ) {

      return res.status(400).json({
        message:
          "Rating must be between 1 and 5"
      });

    }

    const existing =
      await Rating.findOne({
        user: req.user.id,
        store: storeId
      });

    if (existing) {

      return res.status(400).json({
        message:
          "Rating already submitted. Use update."
      });

    }

    await Rating.create({
      user: req.user.id,
      store: storeId,
      rating
    });

    await updateAverage(storeId);

    res.status(201).json({
      message:
        "Rating submitted"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

exports.updateRating = async (
  req,
  res
) => {

  try {

    const {
      rating
    } = req.body;

    const storeId =
      req.params.storeId;

    const existing =
      await Rating.findOne({
        user: req.user.id,
        store: storeId
      });

    if (!existing) {

      return res.status(404).json({
        message:
          "Rating not found"
      });

    }

    existing.rating =
      rating;

    await existing.save();

    await updateAverage(
      storeId
    );

    res.json({
      message:
        "Rating updated"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};

async function updateAverage(
  storeId
) {

  const ratings =
    await Rating.find({
      store: storeId
    });

  const avg =
    ratings.reduce(
      (sum, r) =>
        sum + r.rating,
      0
    ) / ratings.length;

  await Store.findByIdAndUpdate(
    storeId,
    {
      averageRating:
        avg.toFixed(1)
    }
  );

}