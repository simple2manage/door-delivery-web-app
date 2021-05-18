const authentication = require("./authentication");
const categories = require("./categories");
const guest = require("./guest_route");
const host = require("./host_route");
const coupon = require("./coupon_route");
const coupons = require("./coupons");
const subscribers = require("./subscribers");
const subscription = require("./subscription_route");
const experience = require("./experience");
const orders = require("./orders");
const transaction = require("./transaction");
const packages = require("./package");
const badges = require("./badges");
const payment = require("./payment");
const ratings = require("./ratings");

var appRouter = (app, env, rp) => {
  authentication(app, env, rp);
  categories(app, env, rp);
  guest(app, env, rp);
  host(app, env, rp);
  coupon(app, env, rp);
  coupons(app, env, rp);
  subscribers(app, env, rp);
  subscription(app, env, rp);
  experience(app, env, rp);
  orders(app, env, rp);
  transaction(app, env, rp);
  packages(app, env, rp);
  badges(app, env, rp);
  payment(app, env, rp);
  ratings(app, env, rp);

};

module.exports = appRouter;