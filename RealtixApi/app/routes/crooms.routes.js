module.exports = app => {
  const crooms = require("../controllers/crooms.controller.js");

  var router = require("express").Router();

  // Create a new Medical Center Consulting room
  router.post("/", crooms.create);

  // Retrieve all Medical Center Consulting room
  router.get("/", crooms.findAll);

  // Retrieve all published Medical Center Consulting room
  router.get("/published", crooms.findAllPublished);

  // Retrieve a single Medical Center Consulting room with id
  router.get("/:id", crooms.findOne);

  // Update a Medical Center Consulting room with id
  router.put("/:id", crooms.update);

  // Delete a Medical Center Consulting room with id
  router.delete("/:id", crooms.delete);

  // Delete all Medical Center Consulting room
  router.delete("/", crooms.deleteAll);

  app.use("/api/crooms", router);
};
