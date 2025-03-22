const express = require("express");
const { route } = require("express/lib/application");
const routes = express.Router();
const Detail = require("../models/Detail");
const Slider = require("../models/Slider");
const Service = require("../models/Service");
const Contact = require("../models/Contact");
const Banner = require("../models/Banner");
const exphbs = require("express-handlebars");
const Location = require("../models/Location");
const Image = require("../models/Image");


// this is helper function for index.hbs for rendering banner (alternatively based on index)
const hbs = exphbs.create({
  helpers: {
    even: function (index) {
      return index % 2 === 0;
    },
  },
});


// Home Page
routes.get("/", async (req, resp) => {
  let details = await Detail.findOne({ _id: "661b7e629303ab08bdf2d12d" });
  let slider = await Slider.find();
  let service = await Service.find();
  let banner = await Banner.find();
  let location = await Location.find();
  resp.render("index", {
    details: details,
    slider: slider,
    service: service,
    banner: banner,
    location : location
  });
});


// Gallery Page
routes.get("/gallery", async (req, resp) => {
  let details = await Detail.findOne({ _id: "661b7e629303ab08bdf2d12d" });
  let image = await Image.find({ tag: "gallery" });
  let product = await Image.find({ tag: "product" });
  resp.render("gallery", {
    details: details,
    image : image,
    product : product
  });
});


// Query Page
routes.get("/queries", async (req, resp) => {
  let details = await Detail.findOne({ _id: "661b7e629303ab08bdf2d12d" });
  let contact = await Contact.find();
  resp.render("queries", {
    details: details,
    contact: contact,
  });
});


// Admin Page
routes.get("/admin", async (req, resp) => {
  let details = await Detail.findOne({ _id: "661b7e629303ab08bdf2d12d" });
  let slider = await Slider.find();
  let service = await Service.find();
  let banner = await Banner.find();
  let location = await Location.find();
  let image = await Image.find();
  resp.render("admin", {
    details: details,
    slider: slider,
    service: service,
    banner: banner,
    location : location,
    image : image
  });
});


// Contact Us Form
routes.post("/process-form", async (req, res) => {
  const { email, phone, subject, query } = req.body;
  console.log(email);
  console.log(phone);
  console.log(subject);
  console.log(query);

  try {
    const data = await Contact.create({email : email, phone : phone, subject : subject, query : query});
    console.log("Form submitted successfully", data);
    res.redirect("/?success=true");
  } catch (e) {
    console.log("Error Occurred", e);
    res.status(500).render('error', { message: "An error occurred while processing your request. Please try again later." });
  }
});


// routes.get("/delete_location/:id", async (req, res) => {
//   console.log("Entered In Delete Method");
//   console.log(req.body);

//   const locationId = req.params.id;

//   try {
//     const data = await Location.deleteOne({ _id: locationId });
//     console.log(data);
//     res.redirect('/');
//   } catch (e) {
//     console.log(e);
//     console.log("Error Occurred");
//     res.redirect("/");
//   }
// });

//Resolved query
routes.get('/resolved_query/:id', async (req, res) => {
  console.log("Entered the method to resolve query");
  const queryId = req.params.id;

  try {
    const data = await Contact.deleteOne({ _id: queryId });
    console.log(`Query with ID ${queryId} resolved and deleted successfully`, data);
    res.redirect("/"); 
  } catch (e) {
    console.error("Error occurred while resolving query", e);
    res.redirect("/queries"); 
  }
});



// ================= SLIDER UPDATION START ==================//

// Edit Slider
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


//Delete Slider
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


//Add Slider
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
// ================= SLIDER UPDATION END ==================//



// ================= SERVICE UPDATION START ==================//

// Edit Service
routes.post("/edit_service/:id", async (req, resp) => {
  console.log("Entered In Method");
  console.log(req.body);

  const serviceId = req.params.id;
  const { icon, title, description, linkText, link } = req.body;

  console.log("Service ID:", serviceId);
  console.log("Icon:", icon);
  console.log("Title:", title);
  console.log("description:", description);
  console.log("linkText:", linkText);
  console.log("link:", link);

  try{
    const data = await Service.updateOne( {_id : serviceId} , {$set : {icon : icon,  title : title, description : description, linkText : linkText, link : link} } )
    console.log(data)
    resp.redirect('/')
  }catch(e){
    console.log(e);
    console.log("Error Occured");
    resp.redirect("/");
  }

});


//Delete Service
routes.get("/delete_service/:id", async (req, res) => {
  console.log("Entered In Delete Method");

  const serviceId = req.params.id;
  console.log("Service ID:", serviceId);
  
  console.log("body :- ",req.body);


  try {
    const data = await Service.deleteOne({ _id: serviceId });
    console.log(data);
    res.redirect('/');
  } catch (e) {
    console.log(e);
    console.log("Error Occurred");
    res.redirect("/");
  }
});


//Add Service
routes.post("/add_service", async (req, resp) => {
  console.log("Entered In Add Method");
  console.log(req.body);

  const { icon, title, description, linkText, link } = req.body;

  console.log("Icon:", icon);
  console.log("Title:", title);
  console.log("description:", description);
  console.log("linkText:", linkText);
  console.log("link:", link);

  try {
    const data = await Service.create({ icon : icon,  title : title, description : description, linkText : linkText, link : link });
    console.log(data);
    resp.redirect('/');
  } catch (e) {
    console.log(e);
    console.log("Error Occurred");
    resp.redirect("/");
  }

});
// ================= SLIDER UPDATION END ==================//



// ================= BANNER UPDATION START ==================//


// Edit Banner
routes.post("/edit_banner/:id", async (req, resp) => {
  console.log("Entered In Method");
  console.log(req.body);

  const bannerId = req.params.id;
  const { imgUrl, title, subtitle } = req.body;

  console.log("Banner ID:", bannerId);
  console.log("Image URL:", imgUrl);
  console.log("Title:", title);
  console.log("Subtitle:", subtitle);

  try{
    const data = await Banner.updateOne( {_id : bannerId} , {$set : {title : title, subtitle : subtitle, imgUrl : imgUrl} } )
    console.log(data)
    resp.redirect('/')
  }catch(e){
    console.log(e);
    console.log("Error Occured");
    resp.redirect("/");
  }

});


//Delete Banner
routes.get("/delete_banner/:id", async (req, res) => {
  console.log("Entered In Delete Method");
  console.log(req.body);

  const bannerId = req.params.id;

  try {
    const data = await Banner.deleteOne({ _id: bannerId });
    console.log(data);
    res.redirect('/');
  } catch (e) {
    console.log(e);
    console.log("Error Occurred");
    res.redirect("/");
  }
});


//Add Banner
routes.post("/add_banner", async (req, resp) => {
  console.log("Entered In Add Method");
  console.log(req.body);

  const { imgUrl, title, subtitle } = req.body;

  console.log("Image URL:", imgUrl);
  console.log("Title:", title);
  console.log("Subtitle:", subtitle);

  try {
    const data = await Banner.create({
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

// ================= BANNER UPDATION END ==================//



// ================= LOCATION UPDATION START ==================//


// Edit Location
routes.post("/edit_location/:id", async (req, resp) => {
  console.log("Entered In Method");
  console.log(req.body);

  const locationId = req.params.id;
  const { city, location, optional } = req.body;

  console.log("location ID:", locationId);
  console.log("City:", city);
  console.log("location:", location);
  console.log("optional:", optional);

  try{
    const data = await Location.updateOne( {_id : locationId} , {$set : {city : city, location : location, optional : optional} } )
    console.log(data)
    resp.redirect('/')
  }catch(e){
    console.log(e);
    console.log("Error Occured");
    resp.redirect("/");
  }

});


//Delete Location
routes.get("/delete_location/:id", async (req, res) => {
  console.log("Entered In Delete Method");
  console.log(req.body);

  const locationId = req.params.id;

  try {
    const data = await Location.deleteOne({ _id: locationId });
    console.log(data);
    res.redirect('/');
  } catch (e) {
    console.log(e);
    console.log("Error Occurred");
    res.redirect("/");
  }
});


//Add Banner
routes.post("/add_location", async (req, resp) => {
  console.log("Entered In Add Method");
  console.log(req.body);

  const locationId = req.params.id;
  const { city, location, optional } = req.body;

  console.log("location ID:", locationId);
  console.log("City:", city);
  console.log("location:", location);
  console.log("optional:", optional);

  try{
    const data = await Location.create( {city : city, location : location, optional : optional} )
    console.log(data);
    resp.redirect('/');
  } catch (e) {
    console.log(e);
    console.log("Error Occurred");
    resp.redirect("/");
  }

});

// ================= LOCATION UPDATION END ==================//



// ================= IMAGE UPDATION START ==================//


// Edit Image
routes.post("/edit_image/:id", async (req, res) => {
  console.log("Entered In Method");
  console.log(req.body);

  const imageId = req.params.id;
  const { image, tag, description } = req.body;

  console.log("Image ID:", imageId);
  console.log("image:", image);
  console.log("tag:", tag);
  console.log("description:", description);

  try {
    const data = await Image.updateOne(
      { _id: imageId },
      { $set: { image: image, tag: tag, description: description } }
    );
    console.log("Update successful:", data);
    res.redirect('/admin');
  } catch (e) {
    res.redirect('/admin')
    console.error("Error occurred:", e);
    res.status(500).send("Error updating image");
  }
});



//Delete Image
routes.get("/delete_image/:id", async (req, res) => {
  console.log("Entered In Delete Method");
  console.log(req.body);

  const imageId = req.params.id;

  try {
    const data = await Image.deleteOne({ _id: imageId });
    console.log(data);
    res.redirect('/gallery');
  } catch (e) {
    console.log(e);
    console.log("Error Occurred");
    res.redirect("/gallery");
  }
});


//Add Image
routes.post("/add_image", async (req, resp) => {
  console.log("Entered In Add Method");
  console.log(req.body);

  const imageId = req.params.id;
  const { image, tag, description } = req.body;

  console.log("Image ID:", imageId);
  console.log("image:", image);
  console.log("tag:", tag);
  console.log("description:", description);

  try{
    const data = await Image.create({image : image, tag: tag, description : description} )
    console.log(data);
    resp.redirect('/admin');
  } catch (e) {
    console.log(e);
    console.log("Error Occurred");
    resp.redirect("/admin");
  }

});

// ================= IMAGE UPDATION END ==================//



module.exports = routes;
