// pages/home/home.js

const app = getApp(); //获取示例对象

Page({
  handleGetUserInfo(event){
    console.log(event);

    // 以下两行为演示全局变量使用
    console.log(app.globalData.userName);
    console.log(app.globalData.age);

  }
})