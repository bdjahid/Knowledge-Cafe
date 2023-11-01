import PropTypes from 'prop-types';
import BookMark from './BookMark/BookMark';

const Bookmarks = ({ bookMarks }) => {
    return (
        <div className='md:w-1/3 bg-gray-300 ml-4'>
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
    bookMarks: PropTypes.array
}
export default Bookmarks;