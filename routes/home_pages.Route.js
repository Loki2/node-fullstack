const express = require("express");
const router = express.Router();


router.get("/", async (req, res, next) => {
  res.render("client/index", {
    title: "Home",
  });
});

router.get("/blogs", function (req, res, next) {
  res.render("client/blogs", {
    title: "Blog Feeds",
  });
});

router.get("/blogs/:blog_id", function (req, res, next) {
  res.render("client/blog_single", {
    title: "Blog Feeds",
  });
});


router.get("/products", function (req, res, next) {
  res.render("client/product", {
    title: "Products",
  });
});

router.get("/products/:product_id", function (req, res, next) {
  res.render("client/product_detail", {
    title: "Blog Feeds",
  });
});

router.get("/services", function (req, res, next) {
  res.render("client/services", {
    title: "Serivce Career",
  });
});

router.get("/contacts", function (req, res, next) {
  res.render("client/contact", {
    title: "Contact Us",
  });
});

router.get("/abouts", function (req, res, next) {
  res.render("client/about", {
    title: "About Us",
  });
});

router.get("/login", function (req, res, next) {
  res.render("client/login", {
    title: "User Login",
  });
});

router.get("/register", function (req, res, next) {
  res.render("client/register", {
    title: "User Register",
  });
});
module.exports = router;