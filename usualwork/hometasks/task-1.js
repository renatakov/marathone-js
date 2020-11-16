'use strict';

// =============================================== 1 ==================

const firstRow = 'мaмa мылa рaму';
const secondRow = 'собака друг человека';


function getRow(firstRow, secondRow) {
  let countFirstA = 0;
  let countSecondA = 0;
  for (let i = 0; i < firstRow.length; i++) {

    if (firstRow.charAt(i) === 'а') {
      countFirstA += 1
    }
  }
  for (let i = 0; i < secondRow.length; i++) {

    if (secondRow.charAt(i) === 'а') {
      countSecondA += 1;
    }
  }
  if (countFirstA < countSecondA) {
    console.log(firstRow);
  } else {
    console.log(secondRow);
  }
}
getRow(firstRow, secondRow);