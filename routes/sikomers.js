const express = require("express");
const router = express.Router();
const Sikomers = require("../controllers/Sikomers");

router.get("/", Sikomers.showProductList);
router.get("/shop", Sikomers.showShop);
router.get("/shop/:shopId", Sikomers.shopById);
router.get("/product/:productId", Sikomers.showProductById);

module.exports = router;