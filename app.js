const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const rutaFile = (ruta) => {
  const pathAbs = path.resolve(ruta);
  return pathAbs;
};

const mdLinks = () => {
  return new Promise((resolve, reject) => {
    fs.readFile(rutaFile('./README.md'), 'utf8', (error, dato) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(dato);
      }
    });
  });
};

const readFiles = (dato) => {
  return new Promise((resolve, reject) => {
      const reg = /((\[\S.*)\)|[\S.](http:|https:)\/\/(\S*\w)?)/gim;
      const expRe = /\[.+?\]/gi;
      const regular = /(http:|https:)\/\/(\S*\w)?/gim;
      const links = dato.match(regular);
      const texts = dato.match(reg);
      const textStr = texts.toString();
      const text = textStr.match(expRe);
      return resolve(links);
      // text.forEach(elementText => {
      // });
  });
};

const resquest = (links) => {
  return new Promise((resolve, reject) => {
      let statusElements = '';
      links.forEach(elementLink => {
        fetch(elementLink).then((res) => {
          const stats = res.status;
          if (stats === 200) {
            // console.log();
            statusElements += `${elementLink} ${stats}  OK`;
          } else {
            // console.log(`${elementLink} ${stats} FAIL`);
            statusElements += `${elementLink} ${stats} FAIL`;
          }
        });
      });
      return resolve(statusElements);
  });
};

mdLinks(readFiles)
  .then(dato => readFiles(dato))
  .then(links => resquest(links));
  // .catch(error);

module.exports = {
  mdLinks,
  readFiles,
  resquest
};