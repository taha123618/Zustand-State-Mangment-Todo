import create from "zustand";
import { devtools, persist } from "zustand/middleware"; //middleware check the information in the broswer

/*/ In the persist you store all your store data into 
local storage  /*/

const courseStore = (set) => ({
  // initial state
  courses: [],
  // create a actions just like redux maniplate the data
  // addcourse
  addCourse: (course) => {
    set((state) => ({
      courses: [course, ...state.courses],
    }));
  },
  //   removecourse
  removeCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.filter((course) => course.id !== courseId),
    }));
  },
  //   togglecourse
  toggleCourse: (courseId) => {
    set((state) => ({
      courses: state.courses.map((course) =>
        course.id === courseId
          ? { ...course, completed: !course.completed }
          : course
      ),
    }));
  },
});

// create a store

const useCourseStore = create(
  devtools(
    persist(courseStore, {
      name: "courses",
    })
  )
);

export default useCourseStore;
