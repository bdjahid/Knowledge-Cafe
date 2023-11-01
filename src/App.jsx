import { useState } from "react"
import Blogs from "./components/Blogs"
import Bookmarks from "./components/Bookmarks"
import Header from "./components/Header/Header"


function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookMark = blog => {
    console.log(blog)
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
  }

  const handleMarkAsRead = time => {
    console.log('click', time)
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime)
  }

  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookMark={handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}
        ></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
