//index.js
//获取应用实例
const app = getApp()

/***************增加转发分享功能 
 * onShareAppMessage: function (res) {
    return {
      title: 'ECharts 可以在微信小程序中使用啦！',
      path: '/pages/index/index',
      success: function () { },
      fail: function () { }
    }
  },
 * 
 * 
*/
Page({
  data: {

  },
  toChange() {
    wx.navigateTo({
      url: '../select/select'
    })
  },
  toMask(){
    wx.navigateTo({
      url: '../mask/mask'
    })
  }
})