//Create an application which selects a name randomly from a list.

let names = ['John', 'James', 'Walter', 'Edward'];
let randomName = names[Math.floor(Math.random() * names.length)]
console.log(randomName);