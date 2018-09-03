// let readline = require('readline');
// let fs = require('fs');
// let regular =  /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gi;
// let url;
// let myInterface = readline.createInterface({
//   input: fs.createReadStream('README.md')
// });

// let lineno = 0;
// myInterface.on('line', line => {
//   lineno++;
//   url = line.match(regular);
//   console.log(url);
//   // console.log('Line number ' + lineno + ': ' + line);
// });

const fs = require ('fs');
// const regular = /^(http|https)\:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gim;
let url='';
const readmeFile = (callback) => {
  fs.readFile('./README.md','utf8', (error,dato)=> {
    if (error) {
      throw  error;
    } else {
      // url = dato.match(regular);
     callback(dato);
    }
  })
};

const callback = (dato) =>{
  // console.log(dato)
}
readmeFile(callback);

module.exports = {
  readmeFile,
  callback
};