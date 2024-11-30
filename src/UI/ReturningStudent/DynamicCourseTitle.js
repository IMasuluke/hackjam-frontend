import React, { useState } from "react";
import data from "./Mock-data(CourseTitle).json";

const DynamicCourseTitle = () => {
  const [course] = useState(data);

  return (
    <>
      {course.map((details) => (
        <>{details.courseTitle}</>
      ))}
    </>
  );
};

export default DynamicCourseTitle;
