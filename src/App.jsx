
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmark from './components/Bookmark/Bookmark'
import Header from './components/header/header'
import ComponentName from './components/Readingtime/SpentTime'

function App() {
  const [bookmark, setBookmark] = useState([])
  const [time, setTime] = useState(0)
  // console.log(time)
  // Reading Time set on UI 
  const handleTimeOnRead = (id, times) =>{
    const newReadingTime = time + times
    setTime(newReadingTime)
    const remaining = bookmark.filter(bookmark => bookmark.id !== id)  
    setBookmark(remaining)  
  }

  const handleBookMark = (id) => {
    const newBookMark = [...bookmark, id]
    setBookmark(newBookMark)
  }
  return (

    <>
      <Header></Header>

      <div className='md:flex justify-between w-3/3 mt-4'>
        <Blogs handleBookMark={handleBookMark}
        handleTimeOnRead={handleTimeOnRead}
        ></Blogs>
        <div>
          <ComponentName 
          times = {time}
          ></ComponentName>
          <Bookmark bookmark={bookmark}></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App
