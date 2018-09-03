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
const mdLinks = (callback) => {
  fs.readFile('./README.md', 'utf8', (error, dato)=> {
    if (error) {
      throw error;
    } else {
      callback(dato);
    }
  });
};

const callback = (dato) =>{
  const re = /\[.+?]/gim;
  const regular = /^http:|https:\/\/[a-z0-9\.-]+\.[a-z]{2,4}/gim;
  let links = dato.match(regular);
  let urls;
  // console.log(links);
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