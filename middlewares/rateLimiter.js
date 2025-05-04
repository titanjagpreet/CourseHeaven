const rateLimit = require('express-rate-limit');

// Limit: 100 requests per 15 minutes per IP

const rateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100, 
  standardHeaders: true, 
  legacyHeaders: false,
  message: {
    status: 429,
    error: "Too many requests. Please try again later.",
  },
});

module.exports = { rateLimiter };
