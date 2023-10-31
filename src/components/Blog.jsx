import PropTypes from 'prop-types'
const Blog = ({ blog }) => {
    console.log(blog)
    const { title, cover, author, img, date, readingtime, hashtags } = blog;
    return (
        <div>
            <img src={cover} alt={`Cover picture of the title ${title}`} />
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
                </div>
            </div>
            <h2 className='text-4xl'>{title}</h2>
            <p>
                {
                    hashtags.map((hashtag, idx) => <span key={idx}><a href=''>#{hashtag}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;