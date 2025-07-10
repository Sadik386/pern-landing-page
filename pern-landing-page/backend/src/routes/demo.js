const express = require("express");
const router = express.Router();
const demoController = require("../controllers/demoController");

router.post("/contact", demoController.submitContactForm);
router.get("/contacts", demoController.getContacts);

module.exports = router;

