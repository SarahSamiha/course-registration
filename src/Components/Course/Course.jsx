import { BiDollar } from 'react-icons/bi';
import { BsBook } from 'react-icons/bs';
import PropTypes from 'prop-types';

const Course = ({course, handleSelectCourse}) => {
    const {coverImage, title, credit, price, details} = course;
    return (
        <div className='flex flex-col p-3 space-y-5 rounded-xl bg-white'>
            <img className='w-full rounded-xl' src={coverImage} alt="" />
            <h3 className='font-semibold text-lg'>{title}</h3>
            <p className='text-sm font-normal text-gray-500 flex-1'>{details}</p>
            <div className='flex justify-between items-center'>
                <BiDollar></BiDollar>
                <p className='text-sm font-normal text-gray-500'>Price: {price}</p>
                <BsBook ></BsBook>
                <p className='text-sm font-normal text-gray-500'>Credit: {credit} hr</p>
            </div>
            <button className='bg-sky-600 p-2 rounded-xl text-white' onClick={() => handleSelectCourse(course, credit, price)}>Select</button>
        </div>
    );
};

Course.propTypes = {
    course: PropTypes.object.isRequired,
    handleSelectCourse: PropTypes.func.isRequired,
}

export default Course;