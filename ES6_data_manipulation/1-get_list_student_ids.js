export default function getListStudentIds(listStudents) {
  let listResult = [];
  if (Array.isArray(listStudents)) {
    listResult = listStudents.map((student) => (student.id));
  } else {
    listResult = [];
  }
  return listResult;
}
