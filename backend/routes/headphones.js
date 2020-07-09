const express = require('express');
const router = express.Router();
const Headphone = require("../models/headphone");

// Get all headphones

router.get('/', async (req, res) => {
   try {
      const headphones = await Headphone.find({});
      res.json(headphones);
   } catch (err) {
      res.statusCode(500).json({ msg: err.message });
   }
});

// Update one headphone

// Delete one headphone

module.exports = router;