makeAsyncCall('', 'Panther', getJaguar);

function getJaguar(list) {
  makeAsyncCall(list, 'Jaguar', getLynx);
}

function getLynx(list) {
  makeAsyncCall(list, 'Lynx', getSnowLeopard);
}

function getSnowLeopard(list) {
  makeAsyncCall(list, 'Snow Leopard', getLion);
}

function getLion(list) {
  makeAsyncCall(list, 'Lion', printList);
}

function printList(list) {
  console.log(list);
}

function makeAsyncCall(list, returnValue, fn) {
  setTimeout(function asyncCall(data) {
    var catList = list === '' ? data : list + ',' + data;

    fn(catList);
  }, 1, returnValue);
}
