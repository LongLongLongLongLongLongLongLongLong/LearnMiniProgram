// pages/home/home.js

import {getMultileData,getGoodsData} from '../../service/home.js'
const types = ['pop','new','sell'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[],
    titles:['流行','新款','精选'],
    currentType:'pop',
    goods:{
      pop:{page:0,list:[]},
      new:{page:0,list:[]},
      sell:{page:0,list:[]}
    },
    showBackTop:false,
    isTabFixed:false,
    tabScrolltop:0

  },

  itemClick(event){
    console.log(event)
    const index = event.detail.index;

    //设置currentType
    this.setData({
      currentType:types[index]
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      //发送网络请求
      this._getMultileData();
      this. _getGoodsData('pop');
      this. _getGoodsData('new');
      this. _getGoodsData('sell');

  },

  _getGoodsData(type){
//1 获取要请求的页码
   const page = this.data.goods[type].page+1;

//2 发送网络请求
    getGoodsData(
      type,page
    ).then(res=>{
      // console.log(res);
      //1.取出数据
      const list = res.data.data.list;

      //2.将数据设置到对应type的list中
      const oldList = this.data.goods[type].list;
      oldList.push(...list);
      //3.将数据设置到data中的goods中
      const typeKey = `goods.${type}.list`; //拼接数据中的修改路径 
      const pageKey = `goods.${type}.page`; 
      // console.log(typeKey);
      this.setData({
        [typeKey]:oldList,
        [pageKey]:page //请求完数据后，修改页码
      })
    })

  },

  _getMultileData(){
    getMultileData().then(res=>{
       // 取出轮播图数据和推荐数据
    const banners = res.data.data.banner.list;
    const recommends = res.data.data.recommend.list;
    this.setData({
      banners:banners,
      recommends:recommends
   })
    })
   
  },

  onPageScroll(options){
    //官方：不要在滚动的函数中频繁的调用this.setData

    const flag = options.scrollTop>=1000;
    if(flag!=this.data.showBackTop){
      this.setData({
        showBackTop:flag ? true:false
      })
    }

    const flag2 = options.scrollTop>=this.data.tabScrolltop;
    
    if(flag2!=this.data.isTabFixed){
      this.setData({
        isTabFixed:flag2
      })
    }

    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   * 页面显示出来时获取的
   * 
   */

  handImageLoad(){
    wx.createSelectorQuery().select('#tabcontrol').boundingClientRect(rect=>{
      console.log(rect)
      this.data.tabScrolltop = rect.top;
}).exec()
  },


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
    console.log("页面到达底部");
    //上拉加载更多
    this._getGoodsData(this.data.currentType);

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})