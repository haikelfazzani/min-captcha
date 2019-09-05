const nodeRM = require('node-rm')
const fs=require('fs');

const inputFile='./build/index.js';


fs.stat(inputFile, (err, stats) => {
  console.log({ file: inputFile, byte: stats.size, kilobyte: stats.size*0.001 })
})


nodeRM({ inputFile }, (resolve) => {
  console.log(resolve)
  if(resolve.msg && resolve.msg.length > 0) {
    fs.stat(inputFile, (err, stats) => {
      console.log({ file: inputFile, byte: stats.size, kilobyte: stats.size*0.001 })
    })
  }
})
