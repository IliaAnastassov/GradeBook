let gradeBook = {

    _grades: [],

    addGrade: function (grade) {
        this._grades.push(grade);
    },

    getGradeCount: function () {
        return this._grades.length;
    },

    getAverage: function () {
        let sum = 0;

        for (let i = 0; i < this._grades.length; i++) {
            sum += this._grades[i];
        }

        return sum / this._grades.length;
    },

    getLetterGrade: function () {
        let average = this.getAverage();

        if (average >= 90) {
            return "A";
        }
        else if (average >= 80) {
            return "B";
        }
        else if (average >= 70) {
            return "C";
        }
        else if (average >= 60) {
            return "D";
        }

        return "F";
    },

    reset: function () {
        this._grades = [];
    }
};

exports.gradeBook = gradeBook;