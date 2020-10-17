const router = require("express").Router();

const BoletoController = require("../controllers/boletoController");
const HomeController = require("../controllers/homeController");

router.get("/", HomeController.index);

router.get("/boletos", BoletoController.index);
router.post("/boletos", BoletoController.store);

module.exports = router;
