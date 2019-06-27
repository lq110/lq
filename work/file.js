let path = require('path')
let fs = require('fs')
let fsPromise = fs.promises;
let filename = path.join(__dirname, './data.json')

fsPromise.readFile(filename, 'utf-8').then(data => {
  data = JSON.parse(data)

  // console.log(data)
  for (item in data) {
    if (data[item].id === 1) {
      data[item].name = '香蕉'
    }
  }
  console.log(data)
  fsPromise.writeFile(filename, JSON.stringify(data), 'utf-8')
  console.log('我执行完了')
})

