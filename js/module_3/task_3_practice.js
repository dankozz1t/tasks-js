//Створити метод об"єкта який примаэ 1 параметр - назву факультету й рахувати загальну к-ть очок на факультеті (griffindor) //15 +16+ 14

//Створити метод котрий повертає всіх учнів факультетів у форматі стрінги
const hogvarts = {
  griffindor: [
    {
      name: 'Harry',
      points: 15,
    },
    {
      name: 'Hermiona',
      points: 16,
    },
    {
      name: 'Ron',
      points: 14,
    },
  ],
  sliserin: [
    {
      name: 'Draco',
      points: 25,
    },
    {
      name: 'Goyl',
      points: 40,
    },
    {
      name: 'Crabbe',
      points: 5,
    },
  ],

  getTotalPoints(nameFaculty) {
    let totalPoints = 0;

    for (const { points } of this[nameFaculty]) {
      totalPoints += points;
    }

    return totalPoints;
  },

  getAllStudents(nameFaculty) {
    let allStudent = '';
    for (const { name } of this[nameFaculty]) {
      allStudent += name + ' ';
    }
    return allStudent;
  },
};

console.log(hogvarts.getTotalPoints('griffindor'));
console.log(hogvarts.getAllStudents('griffindor'));
