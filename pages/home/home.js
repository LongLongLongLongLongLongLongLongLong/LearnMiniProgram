// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  showToast(){
    wx.showToast({
      title: '你好',
      duration:2000,
      // icon: 'success'
      icon: 'loading',
      //自定义图标
      // image:'/assets/icon/loading.png'
      mask:true, //加上蒙版后，有toast时底下的内容将不能操作
      success:function(){
        console.log("展示成功的回调") 
      },
      fail:function(){
        console.log("展示失败的回调") 
      },
      complete:function(){
        console.log("完成的回调") 
      }
    })
  },

  showModal(){
    wx.showModal({
      title:'我是Modal标题',
      content:'我是内容',
      //showCancel:false, //默认展示“取消”按钮
      cancelText:'退出', //设置取消按钮文字
      cancelColor:'red', //设置文字颜色
      confirmText:'好的',
      confirmColor:'blue',
      success:function(res){
        console.log(res) 
        if(res.cancel){
          console.log("点击了取消") 
        }else if(res.confirm){
          console.log("点击了确定") 
        }
      }
    })
  },

  showLoading(){
    //不会自动消失，要调用wx.hideLoading()手动消失
    wx.showLoading({
      title: '我是loading',
      mask:true,
    }),

    setTimeout(()=>{
       wx.hideLoading({
      success: (res) => {
        console.log(res);
      },
    })
    },2000)
   
  },

  showActionSheeet(){
    wx.showActionSheet({
      //最大长度为6
      itemList: ['电影','音乐','笑话','游戏','象棋','阅读'],
      itemColor:'red',
       success(res){
         console.log(res); //知道选择了哪一个
         //点击第二个后输出 {errMsg: "showActionSheet:ok", tapIndex: 1}
       }
    })
  },
})

