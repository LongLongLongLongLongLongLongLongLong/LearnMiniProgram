// components/myprop/myprop.js
Component({
  /**
   * 组件的属性列表
   * title为要传递的数据定义字段
   */
  properties: {

    title:{
       type:String,
       value:'默认的标题',
       observer:function(newVal,Oldval){
         console.log(newVal);
         console.log(Oldval);
       }
    },
  },
  
  externalClasses:['titleclass'],

})
