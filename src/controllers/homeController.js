class homeController {
  index(request, response) {
    response.render("home.html");
  }
}

module.exports = new homeController();
