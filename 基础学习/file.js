let fs = require('fs');//引入模块
let fsPromise = fs.promises;//node 10版本以上
let path = require('path')
//读取文件  readFile 参数  文件路径 读取格式 回调
fsPromise.readFile(path.join(__dirname, 'app.js'), 'utf-8').then(data => {
  console.log(data)
})
//写入文件 writeFile 参数 1 要写如的文件路径 2要写如的数据 3.写入的数据格式
fsPromise.writeFile('./a.txt', '你好！我是写入的内容', 'utf-8').then(data => {
  console.log(data)
  console.log('写入成功')
})



