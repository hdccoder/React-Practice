import { useState,useEffect } from 'react'
import axios from 'axios'
import Homepage from './components/Homepage'
import AllComments from './components/AllComments'
import NavBar from './components/NavBar'
import SingleComment from './components/SingleComment'
import { Routes,Route } from 'react-router-dom'

import './App.css'

function App() {
 const [allComments, setAllComments] = useState([])

 useEffect(() => {
  const fetchComments = async() => {
    const {data} = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/comments')
  setAllComments(data)
 }

  fetchComments()
 },[])
 

  return (
    <div>
    <NavBar/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/comments' element={<AllComments allComments={allComments}/>}/>
      <Route path='/comments/:id' element={<SingleComment allComments={allComments}/>}/>
    </Routes>
  
   </div>
  )
}

export default App
