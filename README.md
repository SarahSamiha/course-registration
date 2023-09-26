# Project Name: Course Registration
Course Registration is a simple website where you can add courses of your interest. It contains a list of courses with details, price and credit hour.

### Main Features:

**1. Add course to your list:** When you want to enroll in a course you can select the course and it will be added to your course list. The list will show the titles of the courses in an ordered list.

**2. Total credit management:** When a course is added to your list it will also add the credit hour to your previous credit hours of the added courses. If the total credit hour exceeds 20 hours, then it will show an alert massage that you should not add more than 20 hours of credit. 

**3. Remaining credit management:** When a course is added the remaining credit hour is calculated according to the total credit. Initially the remaining credit hour is 20 as this is highest credit hour one can take. It decreases as more courses are added. The lowest value of this field is 0.

**4. Total Price:** Total price of the courses added is shown at bottom of the list. 

### States in the Project:
Total of four states has been used in this project.
1.	One state has been used in “Courses.jsx” to store the data fetched from the ‘courses.json’ file with ‘useEffect’.
2.	A state has been used to maintain the list of added courses. When the ‘Select’ button in ‘Course.jsx’ is clicked, it triggers the function ‘handleSelectCourse’. As this function is declared in ‘App.jsx’, the function is passed to ‘Course.jsx’ through prop drilling. The function uses the state that is declared in ‘App.jsx’ to set the list of added courses. Then this list is passed to ‘MyCourses’ where the course list is displayed. 
3.	The other two states are used to keep track of total credit hour and total price. Both of these states are declared in ‘App.jsx’ as they both trigger when ‘handleSlelectCourse’ function is called. The values are passed to ‘MyCourses.jsx’ as parameters where they are displayed. 


  
