var fs = require('fs');

var firstNames = require('./lib/locales/de/name/first_name');
var lastNames = require('./lib/locales/de/name/last_name');

//var file = fs.createWriteStream('./lib/locales/de/name/first_name_1.js');


var half = Math.round((firstNames.length)/2)

for (var i = firstNames.length - 1; i >= 0; i--) {

    var _name = {value: null, good: false};
    var rtemp = firstNames[i];


    if (half >= i) {
        _name.value = rtemp;
        _name.good = true;
    }else{
        _name.value = rtemp.toLowerCase();
        _name.good = false;
    }
    firstNames[i] = _name;
};


var half = Math.round((lastNames.length)/2)

for (var i = lastNames.length - 1; i >= 0; i--) {

    var _name = {value: null, good: false};
    var rtemp = lastNames[i];


    if (half >= i) {
        _name.value = rtemp;
        _name.good = true;
    }else{
        _name.value = rtemp.toLowerCase();
        _name.good = false;
    }
    lastNames[i] = _name;
};



fs.writeFile('./lib/locales/de/name/first_name_1.js',
            JSON.stringify(firstNames), function(){console.log('done')})
fs.writeFile('./lib/locales/de/name/last_name_1.js',
            JSON.stringify(lastNames), function(){console.log('done')})

/*
file.on('error', function(err) { console.log(err);});


file.write();


file.end();
*/