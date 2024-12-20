// pages/loan/fund/fund.js
import {doRepay} from './commonHelper.js';

Page({

  /**
   * Page initial data
   */
  data: {
    formData: {}

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  },

  back() {
    wx.navigateBack({})
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    const money = e.detail.value.money;
    const times = e.detail.value.times;
    const moneyPerM = e.detail.value.moneyPerM;
    const result = doRepay(money * 10000, times, moneyPerM);
    wx.setStorageSync('loan', result);
    wx.navigateTo({
      url: '/pages/result/list/list',
    })
  },
  formReset: function () {
    console.log('form发生了reset事件')
  }
})