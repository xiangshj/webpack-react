import initialState from './state'
export function conter(states = initialState,actions){
  const text = states.a;
  switch(actions.type){
    case 'ADD':
      return {...states,a: text+1};
    case 'DEL':
      return {...states,a: text-1};
      case 'RIDE':
      case 'promiseTest':
      return {...states,a: text*actions.params};
      default:
        return states
  }
}

