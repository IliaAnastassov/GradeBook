let gradeBook = {

    _grades: [],

    addGrade: function (grade) {
        this._grades.push(grade);
    },

    getGradeCount: function () {
        return this._grades.length;
    }
};

exports.gradeBook = gradeBook;