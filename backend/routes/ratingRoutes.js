const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const {
  submitRating,
  updateRating
} =
require("../controllers/ratingController");

router.post(
  "/",
  authMiddleware,
  submitRating
);

router.put(
  "/:storeId",
  authMiddleware,
  updateRating
);

module.exports = router;