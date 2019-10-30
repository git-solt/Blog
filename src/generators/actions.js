


const addPost = ({title, body, createdAt, id}) => ({
  type: 'ADD_POST',
  title,
  body,
  createdAt,
  id
})

const removePost = (id) => ({
  type: 'REMOVE_POST',
  id

})

const updatePost = ({id, updates, editedAt}) => ({
  type: 'UPDATE_POST',
  id,
  updates,
  editedAt
})

export { addPost, removePost, updatePost }