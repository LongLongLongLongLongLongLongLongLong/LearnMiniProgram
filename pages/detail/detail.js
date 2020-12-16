// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  handleBack(){

    //通过代码方式返回
    wx.navigateBack({
      delta: 1,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 输出 {name: "haha", sex: "1"}
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

    //1.全局函数返回所有栈的页面
   const pages =  getCurrentPages();
   //得到home页面对象  pages.length-2是得到当前页面的前一个页面对象
   const home = pages[pages.length-2];

   //2.调用页面对象的方法修改数据
   home.setData({
     title:'我是修改后的标题'
   })
   console.log(pages);
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})