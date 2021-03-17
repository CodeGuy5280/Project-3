const router = require("express").Router();
const meditationRoutes = require("./meditations");

// Meditation routes routes
router.use("/meditations", meditationRoutes);

module.exports = router;
