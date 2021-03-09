import React from 'react';
import { connect,mapStateToProps,mapDispatchToProps } from 'react-redux'
import {Button } from 'antd';
class Login extends React.Component {
  constructor(props){
    super(props);

  }
  ride=(params)=> {
    this.props.promiseTest(5)
  }
  render(){
    return <div>登录
      <div>a的值是:{this.props.a}</div>
      <Button type="primary" onClick={this.ride}>测试异步</Button>
    </div>
  }
}

mapStateToProps = (state,ownProps) => {
  return {
    a:state.conter.a
  }
};

mapDispatchToProps = (dispatch,ownProps) => {
  return {
    promiseTest:(params) => dispatch({
      type:'promiseTest',
      params
    })
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)