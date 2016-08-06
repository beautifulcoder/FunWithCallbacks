setTimeout(function (name) {
  var catList = name + ',';

  setTimeout(function (name) {
    catList += name + ',';

    setTimeout(function (name) {
      catList += name + ',';

      setTimeout(function (name) {
        catList += name + ',';

        setTimeout(function (name) {
          catList += name;

          console.log(catList);
        }, 1, 'Lion');
      }, 1, 'Snow Leopard');
    }, 1, 'Lynx');
  }, 1, 'Jaguar');
}, 1, 'Panther');
