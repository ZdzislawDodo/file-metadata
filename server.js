var express = require("express"),
    app = express(),
    multer  = require('multer'),
    upload = multer({ dest: 'uploads/' });

app.set("view engine", "ejs");

app.get("/", function(req, res) {
    res.render("landing");
});

app.post('/upload', upload.single('file'), function (req, res, next) {
    var size = {size: req.file.size};
    res.send(size);
});

app.listen(process.env.PORT, process.env.ID, function() {
    console.log("Server listens");
})