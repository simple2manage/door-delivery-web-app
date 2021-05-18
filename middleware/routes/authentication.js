module.exports = (app, env, rp) => {

  const requestCustom = require("../utils/request");
  const serverRoutes = require("../utils/serverRoutes");
  const formidable = require("formidable");
  const Cryptr = require('cryptr');

  const fs = require("fs");
  // Check route is connected
  app.get('/api/', (req, res) => {
    res.status(200).json({ message: 'Delivery Middleware Connected!' })
  })
  /**
   * Check if user is logged in.
   */
  app.post('/api/isLoggedIn', (req, res) => {
    let responseData = {}
    responseData.success = req.session.isLoggedIn
      ? req.session.isLoggedIn
      : false;
    responseData.isLoggedIn = req.session.isLoggedIn
      ? req.session.isLoggedIn
      : false;

    res.status(200).json(responseData);

  })
  app.post('/api/isLoggedIn/login', (req, res) => {
    let responseData = {}
    responseData.success = true
    responseData.isLoggedIn = true
    req.session.success = true
    req.session.isLoggedIn = true
    req.session.save()
    res.status(200).json(responseData);

  })
  /* Admin Login */
  app.post('/api/login', (req, res) => {
    // console.log('admin_req', req);
    // console.log('admin_res', res);
    let requestBody = { ...req.body };
    (requestBody.grant_type = 'password'),
      (requestBody.client_id = env.CLIENT_ID),
      (requestBody.client_secret = env.CLIENT_SECRET);
    var options = {
      method: "POST",
      uri: `/oauth/token`,
      json: true,
      body: requestBody,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };

    rp(options)
      .then(function (response) {
        req.session.isLoggedIn = true;
        req.session.access_token = response.access_token;
        req.session.refresh_token = response.refresh_token;
        let date = new Date();
        let current_time = date.getTime();
        req.session.expires_in =
          current_time + response.expires_in * 1000
        req.session.destroy_in = hasRememberMe(req.body)
        req.session.type = response.type
        req.session.token_type = response.token_type
        req.session.save()
        responseBody = {};
        responseBody.isLoggedIn = req.session.isLoggedIn
          ? req.session.isLoggedIn
          : false;
        responseBody.message = "Login Succesfull",
          res.status(200).json(responseBody);

      })
      .catch(function (err) {
        res.status(500).json(err);
      });
  })

  /* Admin Logout */
  app.post('/api/logout', function (httpReq, httpRes) {
    if (httpReq.session.isLoggedIn) {
      httpReq.session.isLoggedIn = false
      httpReq.session.save()
      httpReq.session.destroy()
      httpRes.status(200)
      let responseBody = {
        isLoggedIn: false,
        message: `Logged out successfully.`
      }
      httpRes.status(200).json(responseBody);
    } else {
      httpRes.status(400)
      let err = {
        isLoggedIn: false,
        message: `Please login before calling this route.`
      }
      httpRes.status(500).json(err);
    }
  })

  const hasRememberMe = ({ rememberMe }) => {
    let day = rememberMe
      ? process.env.RememberMeUserSessionExpireIn
      : process.env.NormalUserSessionExpireIn
    let totalHours = 24 * day
    let totalSeconds = totalHours * 3600
    let date = new Date()
    let current_time = date.getTime()
    let timeStamp = current_time + totalSeconds * 1000
    return timeStamp
  }

}
