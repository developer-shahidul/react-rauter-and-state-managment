//

import { use } from "react";
import { BarChart, XAxis, YAxis, Bar, Tooltip } from "recharts";

const MarksChart = ({ marksPromise }) => {
  const marksDataRes = use(marksPromise);
  const marksData = marksDataRes.data;
  // console.log(marksData);
  // data processing for the marks
  const studentChartData = marksData.map((studentData) => {
    const student = {
      id: studentData.id,
      name: studentData.name,
      bangla: studentData.Marks.Bangla,
      english: studentData.Marks.English,
      math: studentData.Marks.Math,
      science: studentData.Marks.Science,
      social: studentData.Marks.Social,
    };
    const avg =
      (student.bangla +
        student.english +
        student.math +
        student.science +
        student.social) /
      5;
    student.avg = avg; //student object a upload korlam

    return student;
  });
  console.log(studentChartData);
  return (
    <div>
      <BarChart width={1600} height={400} data={studentChartData}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
        <legend></legend>
        <Bar dataKey="avg" fill="yellow"></Bar>
        <Bar dataKey="bangla" fill="blue"></Bar>
      </BarChart>
    </div>
  );
};

export default MarksChart;
