const pino = require('pino');

// Pretty-print configuration for development
const pinoPretty = {
  target: 'pino-pretty',
  options: {
    colorize: true,
    crlf: true,
    translateTime: 'SYS:standard',
    ignore: 'pid,hostname', // optional: makes logs cleaner
  },
};

module.exports = (appName = 'app') =>
  pino(
    {
      name: appName,
      formatters: {
        level: (label) => ({
          level: label.toUpperCase(),
        }),
      },
      timestamp: pino.stdTimeFunctions.isoTime,
      level: process.env.LOG_LEVEL || 'info',
      redact: {
        paths: ['password', '*.password', 'token', 'authorization'],
        censor: '[REDACTED]',
      },
    },
    pino.transport(pinoPretty)
  );
