

const blogReducer = (state, action)=> {
  switch (action.type) {
    case 'ADD_POST' : 
      return [...state, {
        title: action.title,
        body: action.body,
        createdAt: action.createdAt,
        id: action.id
      }]
    case 'REMOVE_POST' :
      return state.filter(({id}) => id !== action.id)
    case 'UPDATE_POST' :
      return state.map((cur) => {
        if(cur.id === action.id) {
          return {
            ...cur,
            ...action.updates,
            editedAt: action.editedAt
          }
        } else {
          return cur
        }
      })
  }
}


export default blogReducer