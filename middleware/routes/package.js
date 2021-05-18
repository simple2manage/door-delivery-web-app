module.exports = (app, env, rp) => {
    const requestCustom = require("../utils/request");
    const serverRoutes = require("../utils/serverRoutes");
    const formidable = require("formidable");
    const Cryptr = require('cryptr');
  
    const fs = require("fs");

    /*Package create */

    app.post('/api/packages/create', (req, res) => {
      let requestBody = { ...req.body }
      let urlQuery = { ...req.query }
      requestCustom.post(
        `${serverRoutes.createPackage}`,
        req,
        res,
        requestBody
      )
    });
  
    /*Package list */

    app.get('/api/packages/list', (req, res) => {
  
      let requestBody = { ...req.query }
      requestCustom.get(`${serverRoutes.listPackage}`, req, res, requestBody)
    })
  
    /*Package view */

    app.get('/api/packages/view', (req, res) => {
      let requestBody = { ...req.query }
      requestCustom.get(`${serverRoutes.viewPackage}/${requestBody.id}`, req, res, requestBody)
    });

  /*Package update */

    app.post('/api/packages/update', (req, res) => {
      let requestBody = { ...req.body }
      let urlQuery = { ...req.query }
      requestCustom.post(
        `${serverRoutes.updatePackage}/${requestBody.id}`,
        req,
        res,
        requestBody
      )
    }); 

    /*Package change-status */
    
    app.post('/api/packages/change-status', (req, res) => {
      let requestBody = { ...req.body }
      let urlQuery = { ...req.query }
      requestCustom.post(
        `${serverRoutes.changestatusPackage}/${requestBody.id}`,
        req,
        res,
        requestBody
      )
    }); 
  
  
  }
  