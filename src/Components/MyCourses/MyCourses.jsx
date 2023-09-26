import MyCourse from "../MyCourse/MyCourse";
import PropTypes from 'prop-types';


const MyCourses = ({ myCourses, totalCreditHour, totalPrice}) => {
    return (
        <div className="p-3">
            <h1 className="text-sky-600 font-bold text-lg pb-3 pt-3 border-b-2">Credit Hour Remaining {20 - totalCreditHour} hr</h1>
            <div>
                <h1 className="font-bold text-xl pb-3 pt-3">Course Name</h1>
                <div className="pb-3 border-b-2">
                {
                    myCourses.map((myCourse, idx) => <MyCourse
                        key={myCourse.id}
                        myCourse={myCourse}
                        idx = {idx}
                    ></MyCourse>)
                }
                </div>
            </div>
            <h3 className="pb-3 pt-3 border-b-2 text-lg font-medium text-gray-600">Total Credit Hour : {totalCreditHour} hr</h3>
            <h3 className="pt-3 text-lg font-medium text-gray-600">Total Price : {totalPrice.toFixed(2)} USD</h3>
        </div>
    );
};

MyCourses.propTypes = {
    myCourses: PropTypes.array.isRequired,
    totalCreditHour: PropTypes.number,
    totalPrice: PropTypes.number,
}

export default MyCourses;