const express = require('express');
const cors = require('cors');
const path = require('path');
const PORT = 5020;
const mongoose = require('mongoose');
const config = require('./config/Database');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');


//Connect to Database
mongoose.connect(config.database_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection Error:'));
db.once('open', function () {
  console.log('Connected To Mongo DB...!')
})

//Initialization App
const app = express();
//Use Cors to promisse multer method overide
app.use(cors());
//Express File uplaod
app.use(fileUpload());
//Setup View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//Setup Body Parser to Conecting with View Engine
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(bodyParser.json());
//Setup Static Folder
app.use(express.static(path.join(__dirname, 'public')));
//Image Customize Validation
// app.use(validator({
//   customValidators: {
//     isImage: function(value, filename) {
//       var extension=(path.extname(filename)).toLowerCase();
//       switch(extension) {
//         case '.jpg': return '.jpg';
//         case '.jpeg': return '.jpeg';
//         case '.png': return '.jpng';
//         case '': return '.jpg';
//         default: return false;
//       }
//     }
// }
// }));

/*
 * ************* Import Super users Routes ************************************
 */
const pagesAdmin = require('./routes/admin_pages.Route');
const adminUser = require('./routes/admin_user.Route');
const adminService = require('./routes/admin_service.Route');
const adminBlog = require('./routes/admin_blog.Route');
const adminType = require('./routes/admin_type.Route');
const adminCats = require('./routes/admin_category.Route');
const adminTags = require('./routes/admin_tags.Route');

/*
 * ************* Use Super users Routes ************************************
 */

app.use('/admin_856', adminUser);
app.use('/admin_856/pages', pagesAdmin);
app.use('/admin_856/service', adminService);
app.use('/admin_856/blogs', adminBlog);
app.use('/admin_856/types', adminType);
app.use('/admin_856/cats', adminCats);
app.use('/admin_856/tags', adminTags);

/*
 ******************** Import Client Routes *********************************
 */
const pagesRoute = require('./routes/home_pages.Route');

/*
 ******************** Use Client Routes ************************************
 */
app.use('/', pagesRoute);



app.listen(PORT, function () {
  console.log(`Server Starting On Port:` + PORT)
})