// function printName(name) {
//     console.log(name);
// }

// IMPORTAÇÃO, FORMA N1°

// importa uma única função
// module.exports = printName;

// importa multiplas funções
// const lastName = 'Teixeira';
// module.exports = { printName, lastName }; // short syntax

// module.exports = { printName, lastName: lastName }; // quando, proprieda e variavel são iguais,
//                               propried: variavel       usa-se short syntax

// IMPORTAÇÃO, FORMA N2°

// exports.printName = function (name) {
//     console.log(name);
// }

// exports.printName = (name) => {
//     console.log(name);
// }

// exports.lastName = 'Teixeira';

// IMPORTAÇÃO, FORMA N3°

// const os = require('os');
// console.log(os.type()); // Linux

// IMPORTANTE                
// module.exports = qualquer tipo de dado