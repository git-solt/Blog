import React, {useState, useEffect} from 'react'



const PostForm = (props) => {
  

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  useEffect(() => {
      if (props.usable) {

      setTitle(props.usable.title)
      setBody(props.usable.body)

      }

    

  },[props])  

  useEffect(() => {
    console.log(title, body)
  }, [title, body])
  
  return (
    <div>
      <form>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
        <textarea value={body} onChange={(e) => setBody(e.target.value)}/>
        <button disabled={!title || !body}onClick={(e) => {
          e.preventDefault()
          props.save({title, body})}}>Save</button>
      </form>
      {props.usable && <a href="#" onClick={props.deletePost}>Delete Post</a>}
    </div>
  )
}

export default PostForm