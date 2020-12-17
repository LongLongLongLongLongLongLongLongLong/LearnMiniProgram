// components/tabcontrol/tabcontrol.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
        type:Array,
        value:[]
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {

    itemClick(event){
      //1.取出index
      const index = event.currentTarget.dataset.index;
      console.log(index);
      this.setData({
        //2.修改索引值
        currentIndex:index,
      })
      //3.通知外部页面事件
      this.triggerEvent('itemHasclick',{index,title:this.properties.titles[index]},{})
    }
  }
})