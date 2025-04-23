
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/header/header'
function App() {
  const [bookmark,setBookmark] = useState([])

  const handleBookMark = (id) =>{
    const newBookMark = [...bookmark, id]
    setBookmark(newBookMark)
  }
  return (
    
    <>
      <Header></Header>
      <div className='md:flex justify-between w-3/3 mt-4'>
        <Blogs handleBookMark ={handleBookMark}></Blogs>
        <div>
        <Bookmark bookmark={bookmark}></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App
