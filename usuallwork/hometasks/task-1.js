'use strict';

// =============================================== 1 ==================

const firstRow = 'мaмa мылa рaму';
const secondRow = 'собака друг человека';


function getRow(firstRow, secondRow) {
  let countFirA = 0;
  let countSecA = 0;
  for (let i = 0; i < firstRow.length; i++) {

    if (firstRow.charAt(i) === 'а') {
      countFirA += 1
    }
  }
  for (let i = 0; i < secondRow.length; i++) {

    if (secondRow.charAt(i) === 'а') {
      countSecA += 1;
    }
  }
  if (countFirA < countSecA) {
    console.log(firstRow);
  } else {
    console.log(secondRow);
  }
}
getRow(firstRow, secondRow)