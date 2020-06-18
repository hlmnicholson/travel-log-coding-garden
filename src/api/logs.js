const { Router } = require('express');

const LogEntry = require('../models/LogEntry');

const router = Router();

router.get('/', (req, res, next) => {
  try {
    res.json({
      message: 'globe',
    });
  } catch (error) {
    next(error);
  }
});

// eslint-disable-next-line no-unused-vars
router.post('/', async (req, res, next) => {
  try {
    const logEntry = new LogEntry(req.body);
    const createdEntry = await logEntry.save();
    console.log(createdEntry);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log(error.name);
    if (error.name === 'ValidationError') {
      res.status(422);
    }
    next(error);
  }
});

module.exports = router;
