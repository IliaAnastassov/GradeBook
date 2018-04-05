let gradeBook = require("./lib/grades").gradeBook;
let express = require("express");
let app = express();

app.get("/", function (req, res) {
    res.send("Hello!");
});

app.get("/grade", function (req, res) {
    let grades = req.query.grades.split(",");
    grades.forEach(grade => {
        gradeBook.addGrade(parseInt(grade));
    });

    let average = gradeBook.getAverage();
    let letterGrade = gradeBook.getLetterGrade();
    res.send("Average score: " + average + "\n" + "Grade: " + letterGrade);

    gradeBook.reset();
});

app.listen(3000);
console.log("Server ready...");
