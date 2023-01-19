export default function myPlugin(option: {current: string}) {
  const current = option.current
  const moduleId = 'virtual:my-version'
  return {
    name: 'my-plugin', // 
    resolveId(source) {
      if (source === moduleId) {
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    load(id) {
      if (id === moduleId) {
        // 可以插入自己的代码
        //  the source code for "virtual-module"
        return ` 
          export const getVersion = ()=> {
            return '${current}, 你真棒!'
          }

        `
      } else {
        return null //other ids should be handled as usually
      }
    },
  }
}