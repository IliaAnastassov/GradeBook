let gradeBook = require("./lib/grades").gradeBook;

if (process.argv.length > 2) {
    for (let i = 2; i < process.argv.length; i++) {
        gradeBook.addGrade(parseInt(process.argv[i]));
    }

    console.log(gradeBook.getAverage(), gradeBook.getLetterGrade());
} else {
    console.log("Please provide some grades. Ex: [grade1] [grade2] [grade3]")
}
