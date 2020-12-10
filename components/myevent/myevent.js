// components/myevent/myevent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

    btnclick(){
      console.log("---------");
      //第一个参数为发出的事件名，第二个参数是传递的数据，按对象传递，第三个参数是设置选项
      this.triggerEvent('increment',{name:'xiaoming',sex:1},{})
    }

  }
})
