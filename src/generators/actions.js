import moment from 'moment'


const addPost = ({ title, body } = {}) => ({
  type: 'ADD_POST',
  title,
  body,
  createdAt: moment().valueOf()
})

const removePost = (id) => ({
  type: 'REMOVE_POST',
  id

})

const updatePost = ({id, updates}) => ({
  type: 'UPDATE_POST',
  id,
  updates
})

export { addPost, removePost, updatePost }