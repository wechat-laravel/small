//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'This  Small-Wechat',
    test : 'test页面跳转',
    array: [{msg: 'this is 1'},{msg: 'this is 2'}],
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  testUrl: function(){
    wx.navigateTo({
      url: '../test/test'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  //下拉刷新,启用时app.json配置"enablePullDownRefresh":"true"
  onPullDownRefresh:function (){
    console.log('ok')
  }
})
