setTimeout(getPanther, 1, 'Panther');

var catList = '';

function getPanther(name) {
  catList = name + ',';

  setTimeout(getJaguar, 1, 'Jaguar');
}

function getJaguar(name) {
  catList += name + ',';

  setTimeout(getLynx, 1, 'Lynx');
}

function getLynx(name) {
  catList += name + ',';

  setTimeout(getSnowLeopard, 1, 'Snow Leopard');
}

function getSnowLeopard(name) {
  catList += name + ',';

  setTimeout(getLion, 1, 'Lion');
}

function getLion(name) {
  catList += name;

  console.log(catList);
}
