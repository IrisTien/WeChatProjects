const app = getApp()

Page({
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    dialogShow: false,
    buttons: [{ text: '确定' }]
  },
  onLoad() {
  },
  goToFundLoan() {
    wx.navigateTo({
      url: '../loan/fund/fund'
    })
  },
  goToBusinessLoan() {
    console.log('bussiness loan');
    this.setData({
      dialogShow: true
    });
  },
  tapDialogButton(e) {
    this.setData({
      dialogShow: false
    })
  },
})