const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const expressHbs =  require('express-handlebars');
const task1Route = require('./routes/task1Route');
const task2Route = require('./routes/task2Route');
const task3Route = require('./routes/task3Route');
const task4Route = require('./routes/task4Route');

app.use(express.static(__dirname + "/html"));

app.engine('hbs',
 expressHbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout", 
}))

app.set("view engine", "hbs");


app.get("/", (req,res) => {
    res.render("index", { title : "Jeopardize Contest"});
})

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use("/task1", task1Route);

app.use("/task2", task2Route);

app.use("/task3", task3Route);

app.use("/task4", task4Route);

app.listen(port, () => console.log(`App listening on port ${port}!`));