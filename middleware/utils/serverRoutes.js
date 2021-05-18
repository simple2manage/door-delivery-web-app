const routes = {
  login: '/oauth/token',
  createCategories: '/categories/create',
  categoriesList: '/categories/list',
  ViewCategories: '/categories/view',
  updateCategories: '/categories/update',
  categoriesChangeStatus: '/categories/change-status',
  deleteCategories: '/categories/delete',
  category_photo_upload: 'categories/update-photo',

  /*Guest Routes*/

  guestList: '/guests/list',
  guestView: '/guests/view',
  guestChangeStatus: '/guests/change-status',
  guestApproveStatus: '/guests/approve',

  /*Host Routes*/

  hostList: '/hosts/list',
  hostView: '/hosts/view',
  hostChangeStatus: '/hosts/change-status',
  hostApproveStatus: '/hosts/approve',

  /* Coupons route*/


  couponView: '/coupons/view',
  couponChangeStatus: '/coupons/change-status',


  /*Guest Routes*/

  guestList: '/guests/list',
  guestView: '/guests/view',
  guestChangeStatus: '/guests/change-status',
  guestApproveStatus: '/guests/approve',

  /*Host Routes*/

  hostList: '/hosts/list',
  hostView: '/hosts/view',
  hostChangeStatus: '/hosts/change-status',
  hostApproveStatus: '/hosts/approve',

  /**Coupons Routes */
  couponsList: '/coupons/list',
  createCoupons: '/coupons/create',
  updateCoupons: '/coupons/update',
  deleteCoupons: '/coupons/delete',

  /**Subscribers Routes */
  SubscribersList: "/subscriptions/list-subscribers",
  SubscribersView: "/subscriptions/view-subscribers",
  /*Subscription Routes*/

  subscriptionCreate: '/subscriptions/create',
  subscriptionUpdate: '/subscriptions/update',
  subscriptionList: '/subscriptions/list',
  subscriptionView: '/subscriptions/view',
  subscriptionChangestatus: '/subscriptions/change-status',
  subscriptionApprovestatus: '/subscriptions/approve',

  /**Experience Routes */
  experienceList: '/experiences/list',
  experienceGuestList:'/orders/list',
  experienceRatingList:'/experiences/rating-list',
  ratingChangeStatus: '/experiences/change-rating-status',
   /**Experience_view Routes */
   experienceView: '/experiences/view',
   experienceTemplateView:'experiences/templates/view',
   experienceTemplateChangeStatus: '/experiences/templates/change-status',
   experienceTemplateApproveStatus: '/experiences/templates/approve',
   experienceTemplateUpdate: '/experiences/templates/update',

    //  /**Order_view Routes */
    //  orderView: '/orders/view',
  /**Transaction Routes */
  transactionList: '/transactions/list',
  transactionView: '/transactions/view',
  
// For package

  createPackage: '/packages/create',
  listPackage: '/packages/list',
  viewPackage: '/packages/view',
  updatePackage: '/packages/update',
  changestatusPackage: '/packages/change-status',
  /**Badges Routes */
  badgesList : '/badges/list',
  badgesView: '/badges/view',
  badgesCreate: '/badges/create',
  badgesUpdate: '/badges/update',
  badgesChangeStatus: '/badges/change-status',

  // For package
  paymentDue: '/experiences/payment-due',
  paymentTransfer: '/experiences/payment-transfer',

  // For Orders
  orderList: 'orders/list',
  orderView: 'orders/view',
  orderRefund: 'experiences/cancel-order',

  // Ratings
  rating_list: 'experiences/rating-list',
}




module.exports = routes;
