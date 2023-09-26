import PropTypes from 'prop-types';

const MyCourse = ({myCourse, idx}) => {
    const {title} = myCourse;
    return (
        <div>
            <h4 className='text-base font-normal text-gray-500'>{idx + 1}. {title}</h4>
        </div>
    );
};

MyCourse.propTypes = {
    myCourse: PropTypes.object.isRequired,
    idx: PropTypes.number
}

export default MyCourse;