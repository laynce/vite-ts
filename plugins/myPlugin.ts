export default function myPlugin() {

  return {
    name: 'my-plugin', // 必须的，将会在 warning 和 error 中显示
    transform(code, id) {
      console.log(222, id)
      if (/util\.ts$/.test(id)) {
        // 将utils的代码进行重新处理
       return `
        import { getDate, setDate as setDate_old} from "@/base"
        
        const setDate = (date) => {
          return '这是插件处理过的方法' + setDate_old(date)
        }
        
        export {
          getDate,
          setDate
        }
        `
      } else {
        return code
      }
    },
  }
}