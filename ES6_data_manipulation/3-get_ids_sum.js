export default function getStudentIdsSum(studentsList) {
  const initialValue = 0;

  const idsSum = studentsList.reduce(
    (accumulator, { id }) => accumulator + id,
    initialValue,
  );
  return idsSum;
}
