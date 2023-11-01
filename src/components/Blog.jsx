import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';
const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
    // console.log(blog)
    const { id, title, cover, author, img, date, readingtime, hashtags } = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex'>
                    <img className='w-14' src={img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{date}</p>
                    </div>
                </div>
                <div>
                    <span>{readingtime}  min read</span>
                    <button onClick={() => handleAddToBookMark(blog)}> <FaBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl mb-8'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href=''>#{hashtag}</a></span>)
                }
            </p>
            <button className='text-red-600' onClick={() => handleMarkAsRead(id, readingtime)}>MarkAsRead </button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.function,
    handleMarkAsRead: PropTypes.function
}
export default Blog;