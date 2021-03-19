const router = require("express").Router();
const meditationsController = require("../../controllers/meditationsController");

// Matches with "/api/meditations"
router
  .route("/")
  .get(meditationsController.findAll)
  .post(meditationsController.create);

// Matches with "/api/meditations/:id"
router
  .route("/:id")
  .get(meditationsController.findById)
  .put(meditationsController.update)
  .delete(meditationsController.remove);

module.exports = router;