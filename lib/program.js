let gradeBook = require("./grades").gradeBook;

gradeBook.addGrade(72)
gradeBook.addGrade(85)
gradeBook.addGrade(90);

console.log(gradeBook.getAverage());