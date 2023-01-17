import { getDate, setDate } from "@/util"
const a: number = 10

interface Person {
  name: string,
  age: number

  getName(): string
}


const P: Person = {
  name: '李明',
  age: 45,
  getName() {
    return this.name
  }
}

// const module1 = import.meta.glob('./src/*.ts', { eager: true })

// const [{ getDate, setDate }] : any[]= Object.values(module1)

// import('./src/util').then(module => {
//   console.log(module)
//   console.log("日期值%c " + module.getDate(), 'color: red')
//   console.log("设置日期值%c " + module.setDate('2022-11-09'), 'color: red')
// })

console.log("a的值%c " + a, 'color: red')
console.log("name的值%c " + P.getName(), 'color: red')

console.log("日期值%c " + getDate(), 'color: red')
console.log("设置日期值%c " + setDate('2022-11-09'), 'color: red')
const app_version = process.env.app_version
const mode = process.env.mode

console.log('%capp版本号' + app_version + ';%c模式' + mode, "color: green; ", "color: pink")
// export {}
/* 
 export {}// 加这个为了处理“无法重新声明块范围变量“P和a”
TS会误以为这些d文件在未来的某个时间会合并 所以在“重复”的变量名上抛出了错误提示 我们只要让TS知道这是些文件
是互不影响 是独立模块就行； 故此只需要在文件末尾加上export { } 即可；或者使用匿名自执行函数包裹起来

*/