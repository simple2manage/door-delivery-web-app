module.exports = (app, env, rp) => {
    const requestCustom = require("../utils/request");
    const serverRoutes = require("../utils/serverRoutes");
    const formidable = require("formidable");
    const Cryptr = require('cryptr');
  
    const fs = require("fs");
  
    /*Rating list */
    app.get('/api/experiences/rating-list', (req, res) => {
  
      let requestBody = { ...req.query }
      requestCustom.get(`${serverRoutes.rating_list}`, req, res, requestBody)
    })
  }
  