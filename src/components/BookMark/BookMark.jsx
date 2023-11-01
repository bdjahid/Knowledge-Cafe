import PropTypes from 'prop-types';

const BookMark = ({ bookMark }) => {
    const { title } = bookMark
    return (
        <div className='bg-slate-400 p-4 m-4 rounded-xl'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};
BookMark.propTypes = {
    bookMark: PropTypes.object
}
export default BookMark;