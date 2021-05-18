module.exports = (app, env, rp) => {
    const requestCustom = require("../utils/request");
    const serverRoutes = require("../utils/serverRoutes");
    const formidable = require("formidable");
    const Cryptr = require('cryptr');
  
    const fs = require("fs");

   
  
  
    /*Package view */

    app.get('/api/experiences/payment-due', (req, res) => {
      let requestBody = { ...req.query }
      requestCustom.get(`${serverRoutes.paymentDue}/${requestBody.id}`, req, res, requestBody)
    });

    app.post('/api/experiences/payment-transfer', (req, res) => {
        let requestBody = { ...req.body }
        let urlQuery = { ...req.query }
        requestCustom.post(
          `${serverRoutes.paymentTransfer}/${requestBody.id}`,
          req,
          res,
          requestBody
        )
      }); 


  
  
  
  }
  