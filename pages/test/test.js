
var app = getApp();
Page({
  data: {
    map_selecttype: {
      '项目1': ["/image/wechat.png", "/image/wechatHL.png","/image/share.png"], 
      '项目2': ["/image/stop.png"], 
      '项目3': ["/image/plus.png", "/image/play.png"],
      '项目4': ["/image/record.png", "/image/icon_cloud_HL.png"]
      },
    current_selecttype_key: "项目1",  
    cureent_chink_size:[3, 6, 12],
    cureent_chink_size_buttom: ["细缝\n(1-2mm宽)", "中缝\n(2-3mm宽)", "宽缝\n(3-5mm宽)"],


    image_index_array: [1, 3, 5, 9, 11, 13, 17, 19, 21],
    chink_index_array_col: [2, 4, 10, 12, 18, 20],
    chink_index_array_row: [6, 7, 8, 14, 15, 16],

    map_colortype: {
      '颜色1': ['black', 'green','yellow'],
      '颜色2': ['blue', 'orange', 'gray'],
      '颜色3': ['darkgoldenrod', 'gold', 'gray', 'chocolate', 'skyblue', 'fuchsia', 'firebrick'],
    },
    current_colortype_key: "颜色1", 
    current_colortype_valuelist: [''],

    current_selecttype_valuelist: [''],
    current_selecttype_valuelist_data: "",
    current_select_chink_size:0,
    current_select_image_size:0,
    current_select_chink: ""

  },

  onLoad(e)
  {
    this.setData({
      current_selecttype_valuelist: this.data.map_selecttype[this.data.current_selecttype_key],
      current_selecttype_valuelist_data: this.data.map_selecttype[this.data.current_selecttype_key][0],
      current_select_chink_size: this.data.cureent_chink_size[0],
      current_select_image_size: (720 - 2 * this.data.cureent_chink_size[0]) / 3,
      current_colortype_valuelist: this.data.map_colortype[this.data.current_colortype_key],
    })

    // 另起一个set,貌似一次set超过上限了，再写下去会无效
    this.setData({

    current_select_chink: this.data.current_colortype_valuelist[0],
    })
  },

  onChangeKey(e) {
    var index = e.detail.value
    var temp = 0
    for (var key in this.data.map_selecttype) {
      if (temp == index)
      {
        this.setData({
          current_selecttype_key: key,
          current_selecttype_valuelist: this.data.map_selecttype[key]
        })
        break;
      }
      temp++;
    }
  },

  selectImage(e) {
    this.setData({
      current_selecttype_valuelist_data: e.target.id
    })

  },

  selectchink(e) {
    this.setData({
      current_select_chink_size: this.data.cureent_chink_size[e.target.id],
      current_select_image_size: (720 - 2 * this.data.cureent_chink_size[e.target.id]) / 3
    })
    console.log(this.data.current_select_chink_size);
    console.log(this.data.current_select_image_size);
  },

  scroll(e){

  },

  onChangeColorKey(e){
    
    var index = e.detail.value
    console.log(index);
    var temp = 0
    for (var key in this.data.map_colortype) {
      if (temp == index) {
        this.setData({
          current_colortype_key: key,
          current_colortype_valuelist: this.data.map_colortype[key]
        })
        break;
      }
      temp++;
    }
    console.log(this.data.current_colortype_valuelist);
  },

  selectchinkcolor(e){
    this.setData({
      current_select_chink: this.data.current_colortype_valuelist[e.target.id]
    })
    console.log(this.data.current_select_chink);
  },

  onScreenShot(e) {
    var that = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success (res) {
        console.log(res.tempFilePaths);
        const tempFilePaths = res.tempFilePaths
        that.setData({
           current_selecttype_valuelist_data: tempFilePaths[0]
        })
      }
    })
  },

  error(e) {
    console.log(e.detail)
  }


});