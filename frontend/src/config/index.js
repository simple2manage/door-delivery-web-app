require("dotenv").config();
const convict = require("convict");

const config = convict({
  NODE_ENV: {
    format: ["production", "development", "test", "local", "stage"],
    default: "development",
    arg: "nodeEnv",
    env: "NODE_ENV"
  },
  // PORT: {
  //   doc: "The port to bind.",
  //   format: "port",
  //   default: 5001,
  //   env: "PORT",
  //   arg: "port"
  // },
  DELIVERY_MIDDLEWARE_PORT: {
    doc: "The port to bind.",
    format: "port",
    default: 5011,
    env: "DELIVERY_MIDDLEWARE_PORT",
    arg: "port"
  },
  DELIVERY_SECURE_CONNECTION: {
    doc: "The secure connection global.",
    format: "*",
    default: false,
    env: "DELIVERY_SECURE_CONNECTION",
    arg: "secure"
  },
  DELIVERY_API_URL: {
    doc: "The IP address to bind.",
    format: "url",
    default: "localhost",
    env: "DELIVERY_API_URL"
  },
  SECRET: {
    doc: "Secret used for session cookies and CSRF tokens",
    format: "*",
    default: "",
    sensitive: true
  },
});

config.validate({ allowed: "strict" });

export default config.getProperties();
