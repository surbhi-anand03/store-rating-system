const express =
  require("express");

const router =
  express.Router();

const authMiddleware =
  require("../middleware/authMiddleware");

const roleMiddleware =
  require("../middleware/roleMiddleware");

const {
  dashboard,
  createUser,
  getUsers,
  getUserDetails,
  createStore,
  getStores
} =
require("../controllers/adminController");

router.use(authMiddleware);

router.use(
  roleMiddleware("admin")
);

router.get(
  "/dashboard",
  dashboard
);

router.post(
  "/users",
  createUser
);

router.get(
  "/users",
  getUsers
);

router.get(
  "/users/:id",
  getUserDetails
);

router.post(
  "/stores",
  createStore
);

router.get(
  "/stores",
  getStores
);

module.exports = router;

