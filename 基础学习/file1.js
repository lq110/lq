let path = require('path')
let fs = require('fs')
let fsPromise = fs.promises;
let filename = path.join(__dirname, './good.json')
// 读取 json 转对象 数组 push 放新的数据 写入文件
fsPromise.readFile(filename, 'utf-8').then(data => {
  //读出来的是个json  转成能操作的对象
  data = JSON.parse(data)
  data.push({
    id: '3',
    name: '橘子'
  })

  //写入数据的时候要把对象转成json
  fsPromise.writeFile(filename, JSON.stringify(data), 'utf-8')
  console.log('代码执行完了')
})


//创建文件夹
// fs.mkdir('abc', function (err) {})
