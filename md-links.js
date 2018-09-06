const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const rutaFile = (ruta) => {
  if (path.isAbsolute(ruta) === true) {
    return ruta;
  } else {
    let pathAbs = path.resolve(ruta);
    return pathAbs;
  }
};

const mdLinks = (callback) => {
  fs.readFile(rutaFile('./README.md'), 'utf8', (error, dato)=> {
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
  resquest(links);
  // text.forEach(elementText => {
  // });
};

const resquest = (links) => {
  let statusElements = '';
  links.forEach(elementLink => {
    fetch(elementLink).then((res) => {
      let stats = res.status;
      if (stats === 200) {
        console.log(`${elementLink} ${stats}  OK`);
      } else {
        console.log(`${elementLink} ${stats} FAIL`);
      }
    });
  });
};

mdLinks(callback);

module.exports = {
  mdLinks,
  callback
};