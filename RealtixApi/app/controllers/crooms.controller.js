const db = require("../models");
const GCRooms = db.pediatrics;
const Op = db.Sequelize.Op;

// Create and Save a new Medical Center Consulting room
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a Medical Center Consulting room
  const croom = {
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  };

  // Save a Medical Center Consulting room in the PostgreSQL Database
  GCRooms.create(croom)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Medical Center Consulting room."
      });
    });
};

// Retrieve all Medical Center Consulting room from the PostgreSQL database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  GCRooms.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Medical Center Consulting room."
      });
    });
};

// Find a single Medical Center Consulting room with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  GCRooms.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Medical Center Consulting room with id=" + id
      });
    });
};

// Update a Medical Center Consulting room by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  GCRooms.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Medical Center Consulting room was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update Medical Center Consulting room with id=${id}. Maybe Medical Center Consulting room was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Medical Center Consulting room with id=" + id
      });
    });
};

// Delete a Medical Center Consulting room with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  GCRooms.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Medical Center Consulting room was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Medical Center Consulting room with id=${id}. Maybe Tutorial was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Medical Center Consulting room with id=" + id
      });
    });
};

// Delete all Medical Center Consulting room from the PostgreSQL database.
exports.deleteAll = (req, res) => {
  GCRooms.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Medical Center Consulting room were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Medical Center Consulting room."
      });
    });
};

// find all published Medical Center Consulting room
exports.findAllPublished = (req, res) => {
  GCRooms.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Medical Center Consulting room."
      });
    });
};
