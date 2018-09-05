<<<<<<< HEAD
const {mdLinks} = require('./md-links');
=======
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
  const reg = /((\[\S.*)\)|[\S.](http:|https:)\/\/(\S*\w)?)/gim;
  const expRe = /\[[\S.]\]/gim;
  const regular = /(http:|https:)\/\/(\S*\w)?/gim;
  const texts = dato.match(reg);
  const textStr = texts.toString();
  const text = textStr.match(expRe);
  const links = dato.match(regular);
  let urls;
  console.log(text);
  links.forEach(element => {
    urls = `'${element}'`;
    // console.log(urls);
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
>>>>>>> eda06d58df36781ca82a5c37cd820e46aaa4f6f6
