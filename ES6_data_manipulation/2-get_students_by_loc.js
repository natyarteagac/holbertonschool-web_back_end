export default function getStudentsByLocation(listStudents, city) {
  const filterByLocation = listStudents.filter((studentData) => studentData.location === city);
  return filterByLocation;
}
