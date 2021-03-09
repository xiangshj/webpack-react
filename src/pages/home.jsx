import React from 'react';
import {
  Link
} from "react-router-dom";
import {Tabs,Button } from 'antd';
import { connect,mapStateToProps,mapDispatchToProps } from 'react-redux'

const { TabPane } = Tabs;
import $ from 'jquery'
class Home extends React.Component {
  constructor(props,context){
    super(props);
    console.log(context)
    this.state ={
      tabKey:'1',
      ower:5
    };
    this.handleClick = this.handleClick.bind(this);

  };
  componentDidMount(){
    
  }
  handleClick(params) {
    this.props.history.push(`b/home?id=${params}`)
  }
  add=(params)=> {
    this.props.add()
  }
  render(){
    return <div className="home">
      <Link to="/login">home</Link>
      <div>a的值是：{this.props.a}
      </div>
      <Button type="primary" onClick={this.add}>Primary Button</Button>
      <Tabs defaultActiveKey={this.tabKey} onChange={this.handleClick}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
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
    add:() => dispatch({
      type:'ADD'
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)