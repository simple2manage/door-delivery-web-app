const env = require("../config");
const { DELIVERY_API_URL, PORT, NODE_ENV } = env;
var rp = require("request-promise-native").defaults({
  baseUrl: DELIVERY_API_URL
});

const requests = {
  delete: (url, req, res, body, message = "") => {
    let query = { ...req.query };
    if (req.query && req.query.local_cluster) {
      query.cluster_id = req.query.local_cluster;
    }
    let requestBody = { ...body };

    if (requestBody && requestBody.local_cluster) {
      query.cluster_id = req.query.local_cluster;
    }

    var options = {
      method: "DELETE",
      uri: `${url}`,
      json: true,
      body: requestBody,
      qs: query,
      rejectUnauthorized: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.session.tokens && req.session.tokens.accessToken && req.session.tokens.accessToken.jwtToken}`
      }
    };

    rp(options)
      .then(function (parsedBody) {
        let successBody = parsedBody;
        successBody.success = true;
        if (message) successBody.message = message;
        res.status(200).json({ data: successBody });
      })
      .catch(function (err) {
        let errorBody = err;
        errorBody.success = false;
        res.status(500).json({ error: errorBody });
      });
  },
  get: (url, req, res, body, type) => {

    var options = {
      method: "GET",
      uri: `${url}`,
      json: true,
      qs: body,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.session && req.session.access_token}`
      }
    };

    rp(options)
      .then(function (parsedBody) {
        if (type == 'getApplicationByNamespace') {
          res.status(200).json({ data: parsedBody, getApplicationByNamespace_URL: url, Json_body: body });
        } else {
          res.status(200).json({ data: parsedBody });
        }

      })
      .catch(function (err) {
        if (type == 'getApplicationByNamespace') {
          res.status(200).json({ error: err, getApplicationByNamespace_URL: url, Json_body: body });
        } else {
          res.status(200).json({ error: err });
        }

      });
  },
  put: (url, req, res, body, message) => {
    let query = { ...req.query };
    if (req.query && req.query.local_cluster) {
      query.cluster_id = req.query.local_cluster;
    }

    var options = {
      method: "PUT",
      uri: `${url}`,
      json: true,
      body: body,
      qs: query,
      rejectUnauthorized: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.session.tokens && req.session.tokens.accessToken && req.session.tokens.accessToken.jwtToken}`
      }
    };

    rp(options)
      .then(function (parsedBody) {
        let successBody = parsedBody;
        successBody.success = true;
        if (message) successBody.message = message;
        res.status(200).json({ data: successBody });
      })
      .catch(function (err) {
        res.status(500).json({ error: err });
      });
  },
  post: (url, req, res, body = {}, message = "") => {
    let query = { ...req.query };
    if (req.query && req.query.local_cluster) {
      query.cluster_id = req.query.local_cluster;
    }

    var options = {
      method: "POST",
      uri: `${url}`,
      json: true,
      body: body,
      qs: query,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.session && req.session.access_token}`
      },
      rejectUnauthorized: false
    };

    rp(options)
      .then(function (parsedBody) {
        let successBody = parsedBody;
        successBody.success = true;

        if (message) {
          successBody.message = message;
        }

        res.status(200).json(successBody);
      })
      .catch(function (err) {
        let errorBody = err;

        errorBody.success = false;
        res.status(500).json(errorBody);
      });
  },

  formPost: (url, req, res, body = {}, message = "") => {
    let requestBody = { ...body };
    let query = { ...req.query };
    if (req.query && req.query.local_cluster) {
      query.cluster_id = req.query.local_cluster;
    }
    const options = {
      method: "POST",
      uri: `${url}`,
      formData: requestBody,
      qs: query,
      rejectUnauthorized: false,
      headers: { Authorization: `Bearer ${req.session && req.session.access_token}` }
    };

    rp(options)
      .then(function (parsedBody) {
        let successBody = parsedBody;
        successBody.success = true;
        if (message) successBody.message = message;
        res.status(200).json({ data: successBody });
      })
      .catch(function (err) {
        let errorBody = err;
        errorBody.success = false;
        res.status(500).json({ error: errorBody });
      });
  },
  formPut: (url, req, res, body = {}, message = "") => {
    let query = { ...req.query };
    if (req.query && req.query.local_cluster) {
      query.cluster_id = req.query.local_cluster;
    }

    var options = {
      method: "PUT",
      uri: `${url}`,
      json: true,
      formData: body,
      qs: query,
      rejectUnauthorized: false,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${req.session.tokens && req.session.tokens.accessToken && req.session.tokens.accessToken.jwtToken}`
      }
    };

    rp(options)
      .then(function (parsedBody) {
        let successBody = parsedBody;
        successBody.success = true;
        if (message) successBody.message = message;
        res.status(200).json({ data: successBody });
      })
      .catch(function (err) {
        res.status(500).json({ error: err });
      });
  }
};

module.exports = requests;
