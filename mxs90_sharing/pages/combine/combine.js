// pages/combine/combine.js
const app = getApp();
Page({
  data: {},

  onLoad: function(options) {
    wx.getImageInfo({
      src: app.globalData.bgPic,
      success: res => {
        this.bgPic = res.path;
        this.draw();
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {},

  draw() {
    let coverImg = app.globalData.toubgsrc
    console.log(coverImg)
    let scale = app.globalData.scale;
    let rotate = app.globalData.rotate;
    let hat_center_x = app.globalData.hat_center_x;
    let hat_center_y = app.globalData.hat_center_y;
    let currentHatId = app.globalData.currentHatId;
    const pc = wx.createCanvasContext("myCanvas");
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    const hat_size = 100 * scale;

    pc.clearRect(0, 0, windowWidth, 300);
    
    pc.drawImage(this.bgPic, windowWidth / 2 - 150, 0, 300, 300);
    if (coverImg){
      pc.drawImage(coverImg, windowWidth / 2 - 150, 0, 300, 300); // 这个是我的背
    }
    pc.translate(hat_center_x, hat_center_y);
    pc.rotate((rotate * Math.PI) / 180);
    pc.drawImage(
      "../../images/" + currentHatId + ".png",
      -hat_size / 2,
      -hat_size / 2,
      hat_size,
      hat_size
    );
    
    pc.draw();
  },
  savePic() {
    const windowWidth = wx.getSystemInfoSync().windowWidth;
    wx.canvasToTempFilePath({
      x: windowWidth / 2 - 150,
      y: 0,
      height: 300,
      width: 300,
      canvasId: "myCanvas",
      success: res => {
        app.globalData.successPic = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: res => {
            wx.navigateTo({
              url: "../share/share",
              success: function(res) {},
              fail: function(res) {},
              complete: function(res) {}
            });
            // console.log("success:" + res);
          },
          fail(e) {
            console.log("err:" + e);
          }
        });
      }
    });
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    let successPic = app.globalData.successPic
      ? app.globalData.successPic
      : "https://6361-cau-vv14h-1302428095.tcb.qcloud.la/static/%E5%B0%81%E9%9D%A2.jpg";
    return {
      title: "毕业快乐，一起换上头像吧~",
      imageUrl: successPic,
      path: "/pages/index/index",
      success: function (res) { }
    };
  }
});
