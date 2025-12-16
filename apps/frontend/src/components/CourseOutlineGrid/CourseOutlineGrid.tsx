import React, { useState } from 'react';
import { CourseCard } from '@/components/FeaturedCourses/CourseCard';
import { mockCourses, categories, sortOptions } from './CourseOutlineGrid.mock';
import styles from './CourseOutlineGrid.module.css';

const CourseOutlineGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedSort, setSelectedSort] = useState('Most Popular');

  // Filter courses by selected category
  const filteredCourses = selectedCategory === 'All Categories' 
    ? [...mockCourses] 
    : mockCourses.filter(course => course.category === selectedCategory);

  // Sort courses based on selected sort option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (selectedSort) {
      case 'Highest Rated':
        return b.rating - a.rating;
      case 'Newest':
        // Since we don't have a date field, we'll use the ID as a proxy
        return parseInt(b.id.split('-')[1]) - parseInt(a.id.split('-')[1]);
      case 'Price: Low to High':
        return a.price - b.price;
      case 'Price: High to Low':
        return b.price - a.price;
      case 'Most Popular':
      default:
        // Sort by rating count as a proxy for popularity
        return b.ratingCount - a.ratingCount;
    }
  });

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Course Outline</h1>
        <div className={styles.filters}>
          <select 
            className={styles.filterButton}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            aria-label="Filter by category"
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          
          <select 
            className={styles.filterButton}
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
            aria-label="Sort by"
          >
            {sortOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {sortedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {sortedCourses.length === 0 && (
        <div className={styles.noResults}>
          <p>No courses found matching your criteria. Try adjusting your filters.</p>
        </div>
      )}
    </section>
  );
};

export default CourseOutlineGrid;
