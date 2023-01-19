  ### 插件部分hooks
  插件执行顺序先按照优先级再按配置顺序(不同类型的插件也和hooks的执行顺序有关)

- resolveId：找到对应文件
- load：加载文件的源码
- transform：把文件源码转换成目标代码
- buildEnd：代码编译完成