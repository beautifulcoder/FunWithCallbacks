var pipeDelimiter = require('./pipeDelimiter');

async function run() {
  await buildFerociousCats({ list: '', delimiter: pipeDelimiter }, 'Panther', getJaguar)
  console.log('DONE');
}

function getJaguar(cat) {
  return buildFerociousCats(cat, 'Jaguar', getLynx);
}

function getLynx(cat) {
  return buildFerociousCats(cat, 'Lynx', getSnowLeopard);
}

function getSnowLeopard(cat) {
  return buildFerociousCats(cat, 'Snow Leopard', getLion);
}

function getLion(cat) {
  return buildFerociousCats(cat, 'Lion', printList);
}

function printList(cat) {
  console.log(cat.list);
}

function buildFerociousCats(cat, returnValue, next) {
  return new Promise((resolve) => {
    setTimeout(function asyncCall(data) {
      var catList = cat.delimiter(cat.list, data);

      resolve(next({ list: catList, delimiter: cat.delimiter }));
    }, 1, returnValue);
  });
}

run().then(() => console.log('DONE DONE'));
