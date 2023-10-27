const express = require("express");
const router = express.Router();
const {
  createContactData,
  getContactData,
} = require("../controller/contactController");

router.post("/contactinfo/add", createContactData);
router.get("/contactinfo/get", getContactData);

module.exports = router;
