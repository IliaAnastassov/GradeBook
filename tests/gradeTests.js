let gradeBook = require("../lib/grades").gradeBook;

exports["setUp"] = function (callback) {
    gradeBook.reset();
    callback();
}

exports["Can add new grade"] = function (test) {
    gradeBook.addGrade(66);
    let count = gradeBook.getGradeCount();

    test.equal(count, 1);
    test.done();
};

exports["Can calculate average"] = function (test) {
    gradeBook.addGrade(100);
    gradeBook.addGrade(50);

    let average = gradeBook.getAverage();

    test.equal(average, 75);
    test.done();
};
