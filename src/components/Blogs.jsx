import { useEffect } from "react";
import { useState } from "react";
import Blog from "./Blog";
import PropTypes from 'prop-types';

const Blogs = ({ handleAddToBookMark, handleMarkAsRead }) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    })
    return (
        <div className="md:w-2/3">
            <h2 className="text-4xl">Blogs:{blogs.length}</h2>
            {
                blogs.map(blog => <Blog
                    blog={blog}
                    key={blog.id}
                    handleAddToBookMark={handleAddToBookMark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddToBookMark: PropTypes.function,
    handleMarkAsRead: PropTypes.function
}
export default Blogs;