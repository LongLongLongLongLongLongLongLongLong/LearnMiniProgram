// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    goods:['音乐','电影','舞蹈','学习']
  },

  btnclick(event){
    console.log(event);
    const dataset = event.currentTarget.dataset;
    console.log(dataset.item);
    console.log(dataset.index);


  }

})