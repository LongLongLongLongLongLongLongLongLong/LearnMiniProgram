// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  handleIncrement(event){
    //修改my-sel中的counter数据
    //1.通过class或id得到组件对象
    // const mySelect = this.selectComponent(".sel-class");
    const mySelect = this.selectComponent("#sel-id");


    //2.调用setData修改数据(不是很合理)
    // mySelect.setData({
    //   counter:mySelect.data.counter+20
    // })

    //3.调用组件中的方法修改数据
    mySelect.incrementCounter(10);

    console.log(mySelect)
  }
})