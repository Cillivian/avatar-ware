// pages/select/select.js
const app = getApp();
var _tousList = [{
  name: '头像框 1',
  coverImgUrl: '../../images/ah1.png'
}, {
  name: '头像框 2',
  coverImgUrl: '../../images/ah2.png'
}, {
  name: '头像框 3',
  coverImgUrl: '../../images/ah3.png'
}, {
  name: '头像框 4',
  coverImgUrl: '../../images/ah4.png'
} ,
{
  name: '头像框 5',
  coverImgUrl: '../../images/ah5.png'
},
{
  name: '头像框 6',
  coverImgUrl: '../../images/ah6.png'
  },
  {
    name: '头像框 7',
    coverImgUrl: '../../images/ah7.png'
  },
  {
    name: '头像框 8',
    coverImgUrl: '../../images/ah8.png'
  }
]

Page({

  /**
   * 页面的初始数据
   */
  data: {
    touList: _tousList
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  //点击选项进入详情页
  detail: function (e) {
    // console.log(e)
    var touNum = e.currentTarget.dataset.tounum
    // console.log(yangzhiNum)
    switch (touNum) {
      case 0:
        app.globalData.toubgsrc = _tousList[0].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 1:
        app.globalData.toubgsrc = _tousList[1].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 2:
        app.globalData.toubgsrc = _tousList[2].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 3:
        app.globalData.toubgsrc = _tousList[3].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 4:
        app.globalData.toubgsrc = _tousList[4].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 5:
        app.globalData.toubgsrc = _tousList[5].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 6:
        app.globalData.toubgsrc = _tousList[6].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      case 7:
        app.globalData.toubgsrc = _tousList[7].coverImgUrl
        wx.navigateTo({
          url: '../madeph/madeph'
        })
        break;
      default:
      //do nothing
    }
  },

})