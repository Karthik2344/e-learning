import React, { useState } from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import { categories } from "../../constants/categories"; // Import categories

const Courses = () => {
  const { courses } = CourseData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(category)
        ? prevSelected.filter((c) => c !== category)
        : [...prevSelected, category]
    );
  };

  // Filter courses based on search query and selected categories
  const filteredCourses = courses.filter((course) => {
    const matchesSearchQuery = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category);
    return matchesSearchQuery && matchesCategory;
  });

  return (
    <div className="courses-page">
      <div className="sidebar">
        <h3>Categories</h3>
        {categories.map((category) => (
          <div key={category} className="category-checkbox">
            <input
              type="checkbox"
              id={category}
              value={category}
              onChange={() => handleCategoryChange(category)}
              checked={selectedCategories.includes(category)}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </div>

      <div className="courses">
        <h2>Available Courses</h2>

        <div className="search-container">
          <input
            type="text"
            placeholder="Search courses..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>

        <div className="course-container">
          {filteredCourses && filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <CourseCard key={course._id} course={course} />
            ))
          ) : (
            <p>No Course Yet!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
