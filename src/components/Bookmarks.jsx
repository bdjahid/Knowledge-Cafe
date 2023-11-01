import PropTypes from 'prop-types';
import BookMark from './BookMark/BookMark';

const Bookmarks = ({ bookMarks, readingTime }) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4'>
            <div>
                <h3 className='text-3xl text-center'>Reading time:{readingTime}</h3>
            </div>
            <h2 className='text-3xl text-center'>Bookmarked blogs: {bookMarks.length}</h2>
            {
                bookMarks.map(bookMark => <BookMark
                    key={bookMark.id}
                    bookMark={bookMark}
                ></BookMark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;