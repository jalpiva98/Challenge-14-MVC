const express = require('express');
const session = require('express-session');
const routes = require('./routes');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const expressHandlebars = require("express-handlebars");
const handlebars = expressHandlebars.create({helpers:require("./utils/helpers")});


//express app and port
const app = express();
const PORT = process.env.PORT || 3001;

//session with a cookie and store in sequelizestore
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};


app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.engine("handlebars", handlebars.engine);
app.set("view engine", "handlebars");


app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});