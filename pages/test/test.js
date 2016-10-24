/**
 * Created by Hackqy on 2016/10/21.
 */
//测试用
var app = getApp()
Page({
    data: {
      butext : '点我变化哦',
      test : {
          text: 'this is Object'
      },
      globaltest : app.globalData.testnum,
      array  : [1,2,3,4,5] ,
      iftest : 'KU',
      count  :  1,
      flag   :  true
    },
    changeText:function(){
        this.setData({
            butext : '变'
        })
    },
    changeObject:function(){
        this.setData({
            'test.text' : '变变变'
        })
    },
    add: function(){
        this.setData({
            count: this.data.count + 1
        })
    }
})