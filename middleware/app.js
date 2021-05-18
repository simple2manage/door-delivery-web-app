const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const path = require("path");
const fs = require("fs");
const errorHandler = require("errorhandler");
var cookieParser = require("cookie-parser");
const session = require("express-session");
const redis = require("redis");
//For Development
const redisClient = redis.createClient();
const redisStore = require("connect-redis")(session);
const https = require("https");
const http = require("http");
const routes = require("./routes");
const Cryptr = require('cryptr');
const serverRoutes = require("./utils/serverRoutes");

// Environment variable configuration
const env = require("./config");

const { DELIVERY_API_URL, PORT, NODE_ENV } = env;
var rp = require("request-promise-native").defaults({
  baseUrl: DELIVERY_API_URL
});
const app = express();

// Adding Helmet to enhance your API's security
app.use(helmet());

// Provides middleware for parsing of cookies
app.use(cookieParser("DELIVERYRedisSession"));

// Using bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));

// Enabling CORS for all requests
app.use(
  require("cors")({
    origin: function (origin, callback) {
      callback(null, origin);
    },
    credentials: true,
  })
);
app.get('/', function (req, res) {
  res.send('hello world')
})

redisClient.on("error", (err) => {
  console.log("Redis error: ", err);
});

// Adding session to store values. We are using redis session. We need to check redis active on our system.
app.use(
  session({
    secret: "DELIVERYRedisSession",
    name: "DELIVERYRedis",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Note that the cookie-parser module is no longer needed
    store: new redisStore({
      host: "localhost",
      port: 6379,
      client: redisClient,
      ttl: 3600,
    }),
  })
);


app.use(function (req, res, next) {
  if (!req.session) {
    return next(new Error("oh no")); // handle error
  }
  next(); // otherwise continue
});




var isProduction = NODE_ENV === "production";

// Enable error handler for only development server.
if (!isProduction) {
  app.use(errorHandler());
}

app.use((req, res, next) => {
  if (req.session && req.session.isLoggedIn) {
    let date = new Date();
    let current_time = date.getTime();
    if (current_time >= req.session.expires_in - 300000) {
      var options = {
        method: "POST",
        uri: `${serverRoutes.login}`,
        json: true,
        body: {
          grant_type: "refresh_token",
          refresh_token: req.session.refresh_token,
          client_id: env.CLIENT_ID,
          client_secret: env.CLIENT_SECRET,
        },
      };
      rp(options)
        .then(function (parsedBody) {
          console.log('session_req', req.session);
          req.session.isLoggedIn = true;
          req.session = parsedBody;
          req.session.expires_in =
            current_time + parsedBody.expires_in * 1000;


          req.session.save();
          let responseBody = {};
          responseBody.isLoggedIn = req.session.isLoggedIn
            ? req.session.isLoggedIn
            : false;
          res.status(200).json(responseBody);
        })
        .catch(function (err) {
          if (err.response) {
            req.session.isLoggedIn = false;
            req.session.save();
            req.session.destroy();
            res.status(500).json(err);
          }
        });
    }
  }
  next();
});
// Defined routes
routes(app, env, rp);

/// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    errors: {
      message: err.message,
      error: !isProduction ? err : {},
    },
  });
});

// Page count
app.use(function (req, res, next) {
  if (req.session.pageCount) req.session.pageCount++;
  else req.session.pageCount = 1;
  next();
});


// Server implementation

http.createServer(app).listen(PORT);

