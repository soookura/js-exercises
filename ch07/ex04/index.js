const data = [
  { name: "Alice", class: "A", math: 10, chemistry: 30, geography: 20 },
  { name: "Bob", class: "A", math: 50, chemistry: 50, geography: 60 },
  { name: "Carol", class: "A", math: 70, chemistry: 55, geography: 30 },
  { name: "Dave", class: "B", math: 40, chemistry: 20, geography: 60 },
  { name: "Ellen", class: "B", math: 60, chemistry: 70, geography: 40 },
  { name: "Frank", class: "B", math: 90, chemistry: 70, geography: 80 },
  { name: "Isaac", class: "C", math: 70, chemistry: 40, geography: 50 },
  { name: "Justin", class: "C", math: 80, chemistry: 40, geography: 30 },
  { name: "Mallet", class: "C", math: 60, chemistry: 70, geography: 90 },
];

// mathの全員の合計点
const mathScores = data.map((student) => student.math);
const totalMathScore = mathScores.reduce((acc, cur) => acc + cur, 0);
console.log(totalMathScore); // => 530

// クラスAのchemistryの平均点
const classAStudents = data.filter((student) => student.class === "A");
const chemistryScores = classAStudents.map((student) => student.chemistry);
const averageChemistryScore =
  chemistryScores.reduce((acc, cur) => acc + cur, 0) / chemistryScores.length;
console.log(averageChemistryScore); // => 45

// クラスCの生徒の3科目合計点の平均点
const classCStudents = data.filter((student) => student.class === "C");
const classCTotalScores = classCStudents.map(
  (student) => student.math + student.chemistry + student.geography,
);
const classCAverageTotalScore =
  classCTotalScores.reduce((acc, cur) => acc + cur, 0) /
  classCTotalScores.length;
console.log(classCAverageTotalScore); // => 176.6666...

// 3科目合計点が最も高い人のname
const studentTotals = data.map((student) => {
  return {
    name: student.name,
    total: student.math + student.chemistry + student.geography,
  };
});
const topStudentName = studentTotals.reduce((acc, cur) =>
  cur.total > acc.total ? cur : acc,
).name;
console.log(topStudentName); // => Frank

// 全体のgeographyの標準偏差
const geographyScores = data.map((student) => student.geography);
const averageGeographyScore =
  geographyScores.reduce((acc, cur) => acc + cur, 0) / geographyScores.length;
// 二乗差
const squaredDiffs = geographyScores.map(
  (score) => (score - averageGeographyScore) ** 2,
);
// 分散
const variance =
  squaredDiffs.reduce((acc, cur) => acc + cur, 0) / squaredDiffs.length;
//  標準偏差
const sd = Math.sqrt(variance);
console.log(sd); // => 22.333..
