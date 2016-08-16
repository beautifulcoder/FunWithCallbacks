var commaDelimiter = require('./commaDelimiter');
var pipeDelimiter = require('./pipeDelimiter');

buildFerociousCats({ list: '', delimiter: commaDelimiter }, 'Panther', getJaguar);
buildFerociousCats({ list: '', delimiter: pipeDelimiter }, 'Panther', getJaguar);

function getJaguar(cat) {
  buildFerociousCats(cat, 'Jaguar', getLynx);
}

function getLynx(cat) {
  buildFerociousCats(cat, 'Lynx', getSnowLeopard);
}

function getSnowLeopard(cat) {
  buildFerociousCats(cat, 'Snow Leopard', getLion);
}

function getLion(cat) {
  buildFerociousCats(cat, 'Lion', printList);
}

function printList(cat) {
  console.log(cat.list);
}

function buildFerociousCats(cat, returnValue, next) {
  setTimeout(function asyncCall(data) {
    var catList = cat.delimiter(cat.list, data);

    next({ list: catList, delimiter: cat.delimiter });
  }, 1, returnValue);
}
