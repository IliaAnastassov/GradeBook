let gradeBook = require("../lib/grades").gradeBook;

exports["Can add new grade"] = function (test) {
    gradeBook.addGrade(75);
    let count = gradeBook.getGradeCount();

    test.equal(count, 1);
    test.done();
}