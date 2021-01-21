const validator =require('validator')
const chalk = require('chalk')
const notes=require('./notes')

// fs.writeFileSync('new.txt','Hey!My name is abhinav')
// fs.appendFileSync('new.txt',' I am a frontend dev')
console.log(notes())
console.log(validator.isEmail("abhhinnav"))
console.log(chalk.bold.red("ERROR!"))