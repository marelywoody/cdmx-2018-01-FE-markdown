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

const fs = require('fs');
const readmeFile = (callback) => {
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
    fetch(urls)
      .then(resp => resp.json());
    // fetch(urls)
    // .then(res => console.log(res))
  });
  // console.log(dato);
};
readmeFile(callback);

module.exports = {
  readmeFile,
  callback
};