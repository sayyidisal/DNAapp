var Util = require('./utils')
var Icon = require('react-native-vector-icons/FontAwesome');

import Form from 'react-native-form'

import React, {
  TouchableHighlight,
  StyleSheet,
  TextInput,
  Text,
  Image,
  AlertIOS,
  View
} from 'react-native';

/**
 * Signup
 *  - init state, isFirstTime = true.
 *    For details goes to tab.js
 */

var Signup = React.createClass({
  getInitialState: function () {
    return({
      isLogin: this.props.isLogin,
      onSignup: this.props.onSignup
    })
  },
  _signup: function(){
    this._signupSuccess()
    // var onThis = this;
    // Util.post("url",this.refs.form.getValues(),function(resData) {
    //     if (resData) {
    //       if (resData.error) {
    //         AlertIOS.alert('注册失败', '验证码错误');
    //       }else{
    //         onThis._signupSuccess()
    //       }
    //     }else{
    //       AlertIOS.alert('注册失败', '服务器无响应');
    //     }
    // })
  },
  _signupSuccess: function () {
    var newState = {
      isLogin: true,
      onSignup: false
    }
    this.setState(newState);
    this.props.callbackSignup(newState);
  },
  _launchLogin: function () {
    var newState = {
      isLogin: false,
      onSignup: false
    }
    this.setState(newState);
    this.props.callbackSignup(newState);
  },
  _getPhoneText: function () {
    AlertIOS.alert("手机号无效", this.refs.form.getValues().phoneNum)
  },
  render: function(){
    return (
      <View style={styles.container}>
        <View style={styles.bgImageWrapper}>
          <Image style={styles.backgroundImage} source={require('./img/DNA1.png')}></Image>
        </View>
        <View>
          <Image style={styles.logo} source={require('./img/dna15.png')}></Image>
          <Text style={styles.logoText}>华大DNA</Text>
        </View>
        <View style={{flex: 1}}>
          <Form ref="form">
            <View style={styles.inputRow}>
              <TextInput type="TextInput" name="phoneNum" placeholderTextColor="#777" style={styles.input} placeholder="手机号" keyboardType="number-pad"/>
            </View>
            <View style={styles.inputRow}>
              <TextInput type="TextInput" name="veriCode" placeholderTextColor="#777" style={styles.input} placeholder="验证码" keyboardType="number-pad"/>
            </View>
          </Form>
          <TouchableHighlight underlayColor="#fff" style={styles.btn_text} onPress={this._getPhoneText}>
            <Text style={{color:'#777',fontSize:10}}>获取验证码</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.inputRow}>
          <TouchableHighlight underlayColor="#48aeb4" style={styles.btn_pm} onPress={this._signup}>
            <Text style={{color:'#fff'}}>注册</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.inputRow}>
          <View style={styles.btn_dec}></View>
          <Text style={styles.btn_or}>或</Text>
          <View style={styles.btn_dec}></View>
        </View>
        <View style={styles.inputRow}>
          <TouchableHighlight underlayColor="#fff" style={styles.btn} onPress={this._launchLogin}>
            <Text style={{color:'#777'}}>登陆</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

});


var styles = StyleSheet.create({
  container:{
    paddingTop:50,
    alignItems:'center'
  },
  bgImageWrapper: {
      position: 'absolute',
      top: 0, bottom: 0, left: 0, right: 0
  },
  backgroundImage: {
    flex: 1,
    alignSelf: 'stretch',
    width: null,
  },
  icon:{
    position: 'absolute',
    right: 10,
    top:6,
    color: '#aaa',
    backgroundColor: "transparent"
  },
  logo:{
    width:70,
    height:70,
    resizeMode: Image.resizeMode.contain,
    marginBottom: 10
  },
  logoText:{
    color: "#fff",
    backgroundColor: "transparent",
    marginBottom:50,
    fontSize:16
  },
  inputRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom:20,
  },
  input:{
    marginLeft:10,
    padding:1,
    marginRight: 80,
    width:250,
    borderWidth:Util.pixel,
    height:35,
    paddingLeft:8,
    borderColor:'#eee',
    borderRadius:1,
    color:"#333",
    backgroundColor:"rgba(255, 255, 255, 0.75)"
  },
  btn_pm:{
    marginTop:10,
    width:160,
    height:35,
    backgroundColor:'#1E868C',
    justifyContent:'center',
    alignItems:'center',
  },
  btn:{
    marginTop:10,
    width:160,
    height:35,
    backgroundColor:'#eee',
    justifyContent:'center',
    alignItems:'center'
  },
  btn_text:{
    width:71,
    height:35,
    position: "absolute",
    right:0,
    top:0,
    borderColor:'#eee',
    borderWidth:Util.pixel,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:1,
    backgroundColor:"rgba(255, 255, 255, 0.75)"
  },
  btn_dec:{
    borderTopWidth: 0.3,
    borderTopColor: "#fff",
    width: 60,
    marginLeft:4,
    marginRight:3,
    top:5
  },
  btn_or:{
    width:20,
    height:20,
    padding:5,
    borderRadius: 10,
    borderWidth: 0.3,
    top:5,
    justifyContent:'center',
    alignItems:'center',
    borderColor: "#fff",
    fontSize: 10,
    color: "#fff",
    backgroundColor:"transparent"
  }
});


module.exports = Signup;


