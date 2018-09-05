const fs = require('fs');
const path = require('path');

readmeFiles = './README.md';
readmeFile = path.resolve(readmeFiles);

const mdLinks = (callback) => {
  fs.readFile(readmeFile, 'utf8', (error, dato)=> {
    if (error) {
      throw error;
    } else {
      callback(dato);
    }
  });
};

const callback = (dato) =>{
  const reg = /((\[\S.*)\)|[\S.](http:|https:)\/\/(\S*\w)?)/gim;
  const expRe = /\[.+?\]/gi;
  const regular = /(http:|https:)\/\/(\S*\w)?/gim;
  const links = dato.match(regular);
  const texts = dato.match(reg);
  const textStr = texts.toString();
  const text = textStr.match(expRe);
  console.log(text);
  let urls;
  links.forEach(element => {
    urls = `'${element}'`;
  });
};

mdLinks(callback);

module.exports = {
  mdLinks,
  callback
};