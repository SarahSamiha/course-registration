import { useState } from 'react'
import './App.css'
import Courses from './Components/Courses/Courses'
import Header from './Components/Header/Header'
import MyCourses from './Components/MyCourses/MyCourses'

function App() {

  const [myCourses, setMyCourses] = useState([]);
  const [totalCreditHour, setTotalCreditHour] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectCourse = (course, credit, price) => {
    const newTotalCreditHour = totalCreditHour + credit;
    if (!(myCourses.includes(course)) && newTotalCreditHour <= 20) {
      const newMyCourses = [...myCourses, course];
      setMyCourses(newMyCourses);
      setTotalCreditHour(newTotalCreditHour);
      setTotalPrice(totalPrice + price);
    }
    else if (newTotalCreditHour > 20) {
      alert('You cannot add more than 20 credit');
    }
    else {
      alert('The course is already added to your list');
    }
  }

  return (
    <div className='bg-slate-200'>
      <div className='max-w-[360px] md:max-w-[1180px] mx-auto'>
        <header className='text-center pt-10 pb-10'>
          <Header></Header>
        </header>
        <main className='flex flex-col-reverse md:flex-row gap-6 '>
          <div className='md:w-2/3 lg:w-3/4'>
            <Courses
              handleSelectCourse={handleSelectCourse}
            ></Courses>
          </div>
          <div className='md:1/3 lg:w-1/4 bg-white rounded-xl'>
            <MyCourses
              myCourses={myCourses}
              totalCreditHour={totalCreditHour}
              totalPrice={totalPrice}
            ></MyCourses>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
