// pages/home/home.js

const app = getApp(); //获取示例对象

Page({

  data(){
    message:"哈哈";
  },
  handleGetUserInfo(event){
    console.log(event);

    // 以下两行为演示全局变量使用
    console.log(app.globalData.userName);
    console.log(app.globalData.age);
  },


  onLoad(){
    console.log("onLoad");
  },

  onReady(){
    console.log("onReady");
  },

  onShow(){
    console.log("onShow");
  },
  onHide(){
    console.log("onHide");
  },

  onUnload(){
    console.log("onUnload");
  },

})