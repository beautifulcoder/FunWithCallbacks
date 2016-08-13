buildFerociousCats('', 'Panther', getJaguar);

function getJaguar(list) {
  buildFerociousCats(list, 'Jaguar', getLynx);
}

function getLynx(list) {
  buildFerociousCats(list, 'Lynx', getSnowLeopard);
}

function getSnowLeopard(list) {
  buildFerociousCats(list, 'Snow Leopard', getLion);
}

function getLion(list) {
  buildFerociousCats(list, 'Lion', printList);
}

function printList(list) {
  console.log(list);
}

function buildFerociousCats(list, returnValue, fn) {
  setTimeout(function asyncCall(data) {
    var catList = list === '' ? data : list + ',' + data;

    fn(catList);
  }, 1, returnValue);
}
