const router = require("express").Router()
const booksControllers = require("../../controllers/booksControllers")

router.route("/")
    .get(booksControllers.findAll)

module.exports = router;