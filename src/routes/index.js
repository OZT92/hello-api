const router = require("express").Router();

const userRoutes = require("./user.routes");

router.get("/", (req, res) => {
  res.json({
    message: "Hello API",
    status: "ok",
  });
});

router.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

router.use("/users", userRoutes);

module.exports = router;
