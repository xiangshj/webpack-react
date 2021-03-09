function add(params){
  return {
    type:'ADD',
    params
  }
}

function del(params){
  return {
    type:'DEL',
    params
  }
}

function ride(){
  return {
    type:'RIDE',
    params
  }
}
function promiseTest(params){
  return function(dispatch){
    dispatch(add());
    setTimeout(function(){
      dispatch(ride(params));
    },500)
  }
}


export {
  add,
  del,
  ride,
  promiseTest
}