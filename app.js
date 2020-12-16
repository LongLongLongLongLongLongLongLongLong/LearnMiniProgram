App({

  globalData:{
    token:''
  },
  onLaunch:function(){

    wx.login({
     //1.登录操作  code只有5分钟有效期
      success:function(res){
        console.log(res);
        const code = res.code;
        console.log(code);

        wx.setStorageSync('token','hahahaa');
        //2.向自己的服务器发送请求
        wx.request({
          url: 'http://132.207.32.32:3000/login',
          method:'POST',
          data:{
            code
          },
          success:(res)=>{
            console.log(res);
            const token = res.data.token;
            //保存起来
            this.globalData.token = token
            wx.setStorageSync({
              data: token,
              key: 'token',
            })
          }
        })

      }
    })
  }
})