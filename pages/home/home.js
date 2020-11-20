Page({
  data:{
    name:'Hello 小程序',
    age:19,
    perpeo:[
      {id:1,name:'小明',age:10},
      {id:2,name:'小红',age:9},
      {id:3,name:'小李',age:11},
    ],
    counter:0
  },

  plus(){
    //1.错误做法，界面不会刷新
    // this.data.counter++;
    // console.log(this.data.counter)

    this.setData({
      counter:this.data.counter+1
    })
  },

  sub(){
    this.setData({
      counter:this.data.counter-1
    })
  }

  
})