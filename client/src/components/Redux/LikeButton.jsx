import React from 'react'
import {useSelector,useDispatch} from "react-redux"
import { likePost,unlikePost } from './Actions'

const LikeButton = () => {
    const likes = useSelector((state) => state.likes);
    const dispatch = useDispatch();
  return (
    <div>
      <h2>likes: {likes}</h2>
      <button onClick={()=> dispatch(likePost())}>Like</button>
      <button onClick={()=> dispatch(unlikePost())}>unlike</button>
    </div>
  )
}

export default LikeButton
