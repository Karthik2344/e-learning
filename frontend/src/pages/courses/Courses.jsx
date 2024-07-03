import React, { useState } from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import { categories } from "../../constants/categories"; // Import categories

const Courses = () => {
  const { courses } = CourseData();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedDurations, setSelectedDurations] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([]);

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

  // Handle duration range change
  const handleDurationChange = (duration) => {
    setSelectedDurations((prevSelected) =>
      prevSelected.includes(duration)
        ? prevSelected.filter((d) => d !== duration)
        : [...prevSelected, duration]
    );
  };

  // Handle price range change
  const handlePriceChange = (price) => {
    setSelectedPrices((prevSelected) =>
      prevSelected.includes(price)
        ? prevSelected.filter((p) => p !== price)
        : [...prevSelected, price]
    );
  };

  // Filter courses based on search query, categories, duration range, and price range
  const filteredCourses = courses.filter((course) => {
    const matchesSearchQuery = course.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(course.category);
    const matchesDuration =
      selectedDurations.length === 0 ||
      selectedDurations.some((duration) => {
        const [min, max] = duration.split("-");
        return course.duration >= parseInt(min) && course.duration <= parseInt(max);
      });
    const matchesPrice =
      selectedPrices.length === 0 ||
      selectedPrices.some((price) => {
        const [min, max] = price.split("-");
        return course.price >= parseInt(min) && course.price <= parseInt(max);
      });
    return matchesSearchQuery && matchesCategory && matchesDuration && matchesPrice;
  });

  // Duration options
  const durationOptions = [
    "0-5 weeks",
    "6-10 weeks",
    "11-15 weeks",
    "16-20 weeks",
    "Above 20 weeks"
  ];

  // Price options
  const priceOptions = [
    "0-1000",
    "1001-2000",
    "2001-5000",
    "Above 5000"
  ];

  return (
    <div className="course-page">
      <div className="course-head">
        <h1>Available Courses</h1>
      </div>
      <div className="course-body">
        <div className="course-left">
          <h2>Categories</h2>
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
          
          <h2>Durations</h2>
          {durationOptions.map((duration) => (
            <div key={duration} className="category-checkbox">
              <input
                type="checkbox"
                id={duration}
                value={duration}
                onChange={() => handleDurationChange(duration)}
                checked={selectedDurations.includes(duration)}
              />
              <label htmlFor={duration}>{duration}</label>
            </div>
          ))}

          <h2>Prices</h2>
          {priceOptions.map((price) => (
            <div key={price} className="category-checkbox">
              <input
                type="checkbox"
                id={price}
                value={price}
                onChange={() => handlePriceChange(price)}
                checked={selectedPrices.includes(price)}
              />
              <label htmlFor={price}>{price}</label>
            </div>
          ))}
        </div>

        <div className="course-right">
          <div className="search">
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
          </div>

          <div className="items">
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
    </div>
  );
};

export default Courses;
