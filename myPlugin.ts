export default function myPlugin() {

  return {
    name: 'my-plugin', // 必须的，将会在 warning 和 error 中显示
    resolveId(id) {
     console.log(id, 333)
    },
    load(id) {
      if (/util\.ts$/.test(id)) {

       return `
        import { getDate, setDate as setDate_old} from "@/base"
        
        const setDate = (date: string): string => {
          return '这是插件处理过的' + setDate_old(date)
        }
        
        export {
          getDate,
          setDate
        }
        `
      }
    },
  }
}