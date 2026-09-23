const monthsWith31Days = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"];

// p191 7.8.6.2 includes()メソッド
function has31DaysIf(month) {
  if (monthsWith31Days.includes(month)) {
    return true;
  } else return false;
}

function has31DaysSwitch(month) {
  switch (month) {
    case "Jan":
      return true;
    case "Mar":
      return true;
    case "May":
      return true;
    case "Jul":
      return true;
    case "Aug":
      return true;
    case "Oct":
      return true;
    case "Dec":
      return true;
    default:
      return false;
  }
}

// AIに聞き、caseをまとめられることを教えてもらいました↓
// function has31DaysSwitch(month) {
//   switch (month) {
//     case "Jan":
//     case "Mar":
//     case "May":
//     case "Jul":
//     case "Aug":
//     case "Oct":
//     case "Dec":
//       return true;
//     default:
//       return false;
//   }
// }

export { has31DaysIf, has31DaysSwitch };
