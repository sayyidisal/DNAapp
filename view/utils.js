

var React = require('react-native');
var Dimensions = require('Dimensions');

var {
  PixelRatio
} = React;

var Util = {

  //单位像素
  ratio: PixelRatio.get(),
  pixel: 1 / PixelRatio.get(),
  //屏幕尺寸
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
  //get 请求
  get: function (url, callback) {
    fetch(url)  
    .then((response) => {
      console.log(response)
      return response.json() // respose a json object
    })
    .then((responseData) => {
      callback(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  //post请求
  post: function (url, data, callback) {
    var fetchOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, fetchOptions)
    .then((response) => {
      console.log(response)
      return response.json() // respose a json object
    })
    .then((responseData) => {
      callback(responseData);
    })
    .catch((error) => {
      console.log(error);
    });
  },
  //Key
  key: 'HSHHSGSGGSTWSYWSYUSUWSHWBS-REACT-NATIVE'

};

module.exports = Util;