export default function getListStudentIds(listStudents) {
  let listResult = [];
  if (Array.isArray(listStudents)) {
    listResult = listStudents.map((student) => (student.id));
  }
  return listResult;
}
