const express = require("express");
const { route } = require("express/lib/application");
const routes = express.Router();
const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const Banner = require("../models/Banner");
const exphbs = require("express-handlebars");

// this is helper function for index.hbs for rendering banner (alternatively based on index)
const hbs = exphbs.create({
  helpers: {
    even: function (index) {
      return index % 2 === 0;
    },
  },
});

routes.get("/", async (req, resp) => {
  let details = await Detail.findOne({ _id: "661b7e629303ab08bdf2d12d" });
  let slider = await Slider.find();
  let service = await Service.find();
  let banner = await Banner.find();
  resp.render("index", {
    details: details,
    slider: slider,
    service: service,
    banner: banner,
  });
});

routes.get("/gallery", async (req, resp) => {
  let details = await Detail.findOne({ _id: "661b7e629303ab08bdf2d12d" });
  resp.render("gallery", {
    details: details,
  });
});

routes.get("/queries", async (req, resp) => {
  let details = await Detail.findOne({ _id: "661b7e629303ab08bdf2d12d" });
  let contact = await Contact.find();
  resp.render("queries", {
    details: details,
    contact: contact,
  });
});

routes.get("/admin", async (req, resp) => {
  let details = await Detail.findOne({ _id: "661b7e629303ab08bdf2d12d" });
  let slider = await Slider.find();
  let service = await Service.find();
  let banner = await Banner.find();
  resp.render("admin", {
    details: details,
    slider: slider,
    service: service,
    banner: banner,
  });
});

routes.post("/process-form", async (req, resp) => {
  console.log("form submitted succesfully");
  console.log(req.body);

  try {
    const data = await Contact.create(req.body);
    console.log(data);
    resp.redirect("/");
  } catch (e) {
    console.log(e);
    console.log("Error Occured");
    resp.redirect("/");
  }
});

routes.post("/edit_slider/:id", async (req, resp) => {
  console.log("Entered In Method");
  console.log(req.body);

  const sliderId = req.params.id;
  const { imgUrl, title, subtitle } = req.body;

  console.log("Slider ID:", sliderId);
  console.log("Image URL:", imgUrl);
  console.log("Title:", title);
  console.log("Subtitle:", subtitle);

  try{
    const data = await Slider.updateOne( {_id : sliderId} , {$set : {title : title, subtitle : subtitle, imgUrl : imgUrl} } )
    console.log(data)
    resp.redirect('/')
  }catch(e){
    console.log(e);
    console.log("Error Occured");
    resp.redirect("/");
  }

});


routes.get("/delete_slider/:id", async (req, res) => {
  console.log("Entered In Delete Method");
  console.log(req.body);

  const sliderId = req.params.id;

  try {
    const data = await Slider.deleteOne({ _id: sliderId });
    console.log(data);
    res.redirect('/');
  } catch (e) {
    console.log(e);
    console.log("Error Occurred");
    res.redirect("/");
  }
});


routes.post("/add_slider", async (req, resp) => {
  console.log("Entered In Add Method");
  console.log(req.body);

  const { imgUrl, title, subtitle } = req.body;

  console.log("Image URL:", imgUrl);
  console.log("Title:", title);
  console.log("Subtitle:", subtitle);

  try {
    const data = await Slider.create({
      imgUrl: imgUrl,
      title: title,
      subtitle: subtitle
    });
    console.log(data);
    resp.redirect('/');
  } catch (e) {
    console.log(e);
    console.log("Error Occurred");
    resp.redirect("/");
  }

});

// routes.get('editSlider', ()=>{

// })

module.exports = routes;
