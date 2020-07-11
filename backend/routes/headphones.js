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

// Add one headphone
router.post('/add', async (req, res) => {
   const headphone = new Headphone({
      name: req.body.name
   });

   try {
      const newHeadphone = await headphone.save();
      res.status(201).json(newHeadphone);
   } catch (err) {
      res.status(400).json({ msg: err.message });
   }
});

// Update one headphone (start time)
router.patch('/start/:id', getHeadphone, async (req, res) => {
   res.headphone.startDate = Date.now();

   try {
      const updatedHeadphone = await res.headphone.save();
      res.json(updatedHeadphone);
   } catch (err) {
      res.status(400).json({ msg: err.message });
   }
});

// Update one headphone (end time)
router.patch('/end/:id', getHeadphone, async (req, res) => {
   res.headphone.endDate = Date.now();

   try {
      const updatedHeadphone = await res.headphone.save();
      res.json(updatedHeadphone);
   } catch (err) {
      res.status(400).json({ msg: err.message });
   }
});

// Delete one headphone
router.delete('/:id', getHeadphone, async (req, res) => {
   try {
      await res.headphone.remove();
      res.json({ msg: "Deleted headphone record" });
   } catch (err) {
      res.status(500).json({ msg: err.message });
   }
});

// Middleware
async function getHeadphone(req, res, next) {
   let headphone;
   try {
      headphone = await Headphone.findById(req.params.id);
      if (!headphone) return res.status(404).json({ msg: "Cannot find headphone record" });
   } catch (err) {
      return res.status(500).json({ msg: err.message });
   }

   res.headphone = headphone;
   next();
}

module.exports = router;