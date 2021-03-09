import {
  Redirect,
  Route,
} from "react-router-dom";
import React from "react";
// 返回路由
export const routeItem = props => {
  const { redirect, path, component, key } = props;
  if(redirect){
    return <Redirect exact key={key} from={path} to={redirect} />
  }
  return <Route exact key={key} component={component} path={path} />
}

//获取子路由
export const loopRoute = (props,list) => {
  const {children,path:prePath,key} = props;
  list.push({
    key,
    redirect:prePath+props.redirect,
    path:prePath,
    component: props.component,
  })
  children&&children.length && children.forEach((item,idx) => {
    const {children:itemChildren,component,redirect,path} = item;
    let _path = prePath + path;
    
    if(itemChildren && itemChildren.length){
      if(component){
        list.push({
          key:`${props.key}-${idx}`,
          redirect,
            path: _path,
            component: component
        })
      }
      loopRoute(item,list)
    }else{
      list.push({
        key:`${props.key}-${idx}`,
        redirect,
        path: _path,
        component: component
      })
    }
  })
  return list
}

// 获取路由列表
export const routeList = routeConfig => {
  const arr = [];
  routeConfig.forEach((item,idx)=>{
    const {redirect,path,component,children} = item;
    Array.isArray(children) && children.length ? loopRoute({...item,key:idx},arr):arr.push({
      key:idx,
      redirect,
      path: path,
      component: component
    })
  })
  return arr
}