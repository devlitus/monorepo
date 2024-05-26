import winston from 'winston';

// Configure the logger
const logger = winston.createLogger({
  level: 'info', // Set the log level according to your needs
  format: winston.format.json(), // Set the log format
  transports: [
    new winston.transports.Console(), // Output logs to the console
    // Add more transports as needed, such as file transport
  ],
});

export default logger;