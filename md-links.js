const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const rutaFile = (ruta) => {
  const pathAbs = path.resolve(ruta);
  return pathAbs;
};

const mdLinks = (readFiles) => {
  fs.readFile(rutaFile('./README.md'), 'utf8', (error, dato)=> {
    if (error) {
      throw error;
    } else {
      return readFiles(dato);
    }
  });
};

const readFiles = (dato) =>{
  const reg = /((\[\S.*)\)|[\S.](http:|https:)\/\/(\S*\w)?)/gim;
  const expRe = /\[.+?\]/gi;
  const regular = /(http:|https:)\/\/(\S*\w)?/gim;
  const links = dato.match(regular);
  const texts = dato.match(reg);
  const textStr = texts.toString();
  const text = textStr.match(expRe);
  return resquest(links);
  // text.forEach(elementText => {
  // });
};

const resquest = (links) => {
  let statusElements = '';
  links.forEach(elementLink => {
    fetch(elementLink).then((res) => {
      const stats = res.status;
      if (stats === 200) {
        console.log(`${elementLink} ${stats}  OK`);
      } else {
        // console.log(`${elementLink} ${stats} FAIL`);
      }
    });
  });
};

mdLinks(readFiles);

module.exports = {
  mdLinks,
  readFiles,
  resquest
};