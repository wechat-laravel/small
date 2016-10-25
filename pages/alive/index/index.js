Page({
    data: {
        imgUrls: [
            {src:'../../../image/1.jpg'},
            {src:'../../../image/2.jpg'},
            {src:'../../../image/3.jpg'},
            {src:'../../../image/4.png'},
            {src:'../../../image/1.jpg'}
        ],
        indicatorDots: true,
        vertical: false,
        autoplay: false,
        interval: 3000,
        duration: 1200,
        icon    : 'search'
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    },
    formSubmit: function(e) {
        console.log('form发生了submit事件，携带数据为：', e.detail.value)
    },
    formReset: function() {
        console.log('form发生了reset事件')
    }
})

