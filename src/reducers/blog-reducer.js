import uuid from 'uuid'
import moment from 'moment'

const blogReducer = (state, action)=> {
  switch (action.type) {
    case 'ADD_POST' : 
      return [...state, {
        title: action.title,
        body: action.body,
        createdAt: action.createdAt,
        id: `23a${state.length}`
      }]
    case 'REMOVE_POST' :
      return state.filter(({id}) => id !== action.id)
    case 'UPDATE_POST' :
      return state.map((cur) => {
        if(cur.id === action.id) {
          return {
            ...cur,
            ...action.updates,
            editedAt: moment().valueOf()
          }
        } else {
          return cur
        }
      })
  }
}


export default blogReducer