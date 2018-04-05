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

    getMark: function () {
        let mark;
        let average = this.getAverage();

        if (average > 90) {
            mark = "A";
        } else if (average > 80) {
            mark = "B";
        } else if (average > 60) {
            mark = "C";
        } else if (average > 40) {
            mark = "D";
        } else if (average > 20) {
            mark = "E";
        } else {
            mark = "F";
        }

        return mark;
    },

    reset: function () {
        this._grades = [];
    }
};

exports.gradeBook = gradeBook;