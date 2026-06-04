const router = require("express").Router();

const {
  getUsers,
  createUser,
} = require("../controllers/user.controller");

const validate = require("../middlewares/validate.middleware");
const { createUserSchema } = require("../validators/user.validator");

router.get("/", getUsers);
router.post("/", validate(createUserSchema), createUser);

module.exports = router;