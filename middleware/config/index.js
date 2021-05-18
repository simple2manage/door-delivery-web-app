require("dotenv").config();
const convict = require("convict");

const config = convict({
  NODE_ENV: {
    format: ["production", "development", "test", "local", "stage"],
    default: "development",
    arg: "nodeEnv",
    env: "NODE_ENV"
  },
  PORT: {
    doc: "The port to bind.",
    format: "port",
    default: 5001,
    env: "PORT",
    arg: "port"
  },
  DELIVERY_MIDDLEWARE_PORT: {
    doc: "The port to bind.",
    format: "port",
    default: 5001,
    env: "DELIVERY_MIDDLEWARE_PORT",
    arg: "DELIVERY_MIDDLEWARE_PORT"
  },
  DELIVERY_SECURE_CONNECTION: {
    doc: "The secure connection global.",
    format: "*",
    default: false,
    env: "DELIVERY_SECURE_CONNECTION",
    arg: "DELIVERY_SECURE_CONNECTION"
  },

  DELIVERY_API_URL: {
    doc: "The IP address to bind.",
    format: "url",
    default: "localhost",
    env: "DELIVERY_API_URL"
  },
  CLIENT_ID: {
    doc: "Secret used for session cookies and CSRF tokens",
    format: "*",
    default: "",
    sensitive: true,
    env: "CLIENT_ID"
  },
  CLIENT_SECRET: {
    doc: "Secret used for session cookies and CSRF tokens",
    format: "*",
    default: "",
    sensitive: true,
    env: "CLIENT_SECRET"
  }
});

config.validate({ allowed: "strict" });

module.exports = config.getProperties();
