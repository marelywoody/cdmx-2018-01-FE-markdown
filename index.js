// let readline = require('readline');
// let fs = require('fs');
// let myInterface = readline.createInterface({
//   input: fs.createReadStream('README.md')
// });

// let lineno = 0;
// myInterface.on('line', line => {
//   lineno++;
//   // console.log(lineno + ': ' + line);
// });

const fs = require('fs');
const path = require('path');
const mdLinks = (callback) => {
  fs.readFile(path.resolve(__dirname, 'README.md'), 'utf8', (error, dato)=> {
    if (error) {
      throw error;
    } else {
      callback(dato);
    }
  });
};

const callback = (dato) =>{
  const regular = /(http:|https:)\/\/(\S*\w)?/gim;
  const links = dato.match(regular);
  let urls;
  links.forEach(element => {
    urls = `'${element}'`;
    console.log(urls);
    // .then(resp => resp.json());
    // fetch(urls)
    // .then(res => console.log(res))
  });
  // console.log(dato);
};
mdLinks(callback);

module.exports = {
  mdLinks,
  callback
};