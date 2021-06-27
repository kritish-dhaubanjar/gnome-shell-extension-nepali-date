const digits = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"];

const months = [
  "वैशाख",
  "जेठ",
  "असार",
  "साउन",
  "भदौ",
  "आश्विन",
  "कार्तिक",
  "मंसिर",
  "पौष",
  "माघ",
  "फाल्गुण",
  "चैत",
];

const map = {
  //enYear: [npYear, np day for Jan 1, total days in Poush, ... , total days in Mangshir, total days in Poush]
  2020: [2076, 17, 29, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
  2021: [2077, 17, 29, 30, 29, 31, 31, 31, 31, 32, 31, 31, 30, 29, 30],
  2022: [2078, 17, 30, 29, 30, 30, 31, 31, 32, 31, 31, 31, 30, 29, 30],
  2023: [2079, 17, 30, 29, 30, 30, 31, 32, 31, 32, 31, 30, 30, 30, 29],
};

var NepaliDate = class NepaliDate {
  static getNepaliDate() {
    const en = new Date();
    const enYear = en.getFullYear();
    const enDayOfYear = Math.floor(
      (en - new Date(en.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24)
    );

    let npYear = map[enYear][0];
    let npMonth = 9;
    let npDaysInMonth = map[enYear][2];

    let npTempDays = map[enYear][2] - map[enYear][1] + 1;

    for (let i = 3; enDayOfYear > npTempDays; i++) {
      npTempDays += map[enYear][i];
      npDaysInMonth = map[enYear][i];
      npMonth++;
      if (npMonth > 12) {
        npMonth -= 12;
        npYear++;
      }
    }

    const npDay = npDaysInMonth - (npTempDays - enDayOfYear);

    return NepaliDate._formatNepaliDate({
      year: npYear,
      month: npMonth,
      day: npDay,
    });
  }

  static _formatNepaliDate({ year, month, day }) {
    const npMonth = months[month - 1];
    let npYear = "";
    let npDay = "";

    for (let char of year.toString()) {
      npYear += digits[char];
    }

    for (let char of day.toString()) {
      npDay += digits[char];
    }

    return `${npDay} ${npMonth} ${npYear}`;
  }
};
