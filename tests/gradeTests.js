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

exports["Can compute letter grade of A"] = function (test) {
    gradeBook.addGrade(96);
    gradeBook.addGrade(89);

    let mark = gradeBook.getLetterGrade();

    test.equal(mark, "A");
    test.done();
};

exports["Can compute letter grade of B"] = function (test) {
    gradeBook.addGrade(91);
    gradeBook.addGrade(83);

    let mark = gradeBook.getLetterGrade();

    test.equal(mark, "B");
    test.done();
};

exports["Can compute letter grade of C"] = function (test) {
    gradeBook.addGrade(79);
    gradeBook.addGrade(73);

    let mark = gradeBook.getLetterGrade();

    test.equal(mark, "C");
    test.done();
};

exports["Can compute letter grade of D"] = function (test) {
    gradeBook.addGrade(70);
    gradeBook.addGrade(61);

    let mark = gradeBook.getLetterGrade();

    test.equal(mark, "D");
    test.done();
};

exports["Can compute letter grade of F"] = function (test) {
    gradeBook.addGrade(52);
    gradeBook.addGrade(45);

    let mark = gradeBook.getLetterGrade();

    test.equal(mark, "F");
    test.done();
};

