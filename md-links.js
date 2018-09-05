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
  links.forEach(elementLink => {
    let urls = `${elementLink}`;
    fetch(urls).then((res) => {
      return res.status;
    });
  });
  text.forEach(elementText => {
    // console.log(elementText);
  });
};

mdLinks(callback);

module.exports = {
  mdLinks,
  callback
};