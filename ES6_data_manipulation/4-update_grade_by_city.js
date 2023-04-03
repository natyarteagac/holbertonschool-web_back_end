export default function updateStudentGradeByCity(studentsList, city, newGrades) {
  const filterByLocation = studentsList.filter((studentData) => studentData.location === city);
  const addedNewGrades = filterByLocation.map((student) => {
    const newGrade = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student, grade: newGrade ? newGrade.grade : 'N/A',
    };
  });
  return addedNewGrades;
}
