import { useState } from "react"
import Blogs from "./components/Blogs"
import Bookmarks from "./components/Bookmarks"
import Header from "./components/Header/Header"


function App() {
  const [bookMarks, setBookMarks] = useState([]);
  const handleAddToBookMark = blog => {
    console.log(blog)
    const newBookMarks = [...bookMarks, blog]
    setBookMarks(newBookMarks)
  }


  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto">
        <Blogs handleAddToBookMark={handleAddToBookMark}></Blogs>
        <Bookmarks bookMarks={bookMarks}></Bookmarks>
      </div>
    </>
  )
}

export default App
