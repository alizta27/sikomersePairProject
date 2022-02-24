const express = require("express");
const routers = require("./routes");
const PORT = 3005;
const session = require("express-session");
const app = express();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        sameSite: true,
    }
}));
app.use(express.static(__dirname));

app.use(routers);

app.listen(PORT, () => {
    console.log(`Sikomers Landing on port: ${PORT}`);
});