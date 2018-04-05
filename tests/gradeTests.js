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

exports["Can calculate mark"] = function (test) {
    gradeBook.addGrade(96);
    gradeBook.addGrade(89);

    let markA = gradeBook.getMark();

    test.equal(markA, "A");
    gradeBook.reset();

    gradeBook.addGrade(86);
    gradeBook.addGrade(81);

    let markB = gradeBook.getMark();

    test.equal(markB, "B");
    gradeBook.reset();

    gradeBook.addGrade(78);
    gradeBook.addGrade(63);

    let markC = gradeBook.getMark();

    test.equal(markC, "C");
    gradeBook.reset();

    test.done();
};
