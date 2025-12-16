import { FeaturedCourse } from "@/components/FeaturedCourses/FeaturedCourses.mock";

// Generate mock data for 24 courses
const generateMockCourses = (count: number): FeaturedCourse[] => {
  const categories = [
    { name: 'Design', tone: 'blue' },
    { name: 'Development', tone: 'green' },
    { name: 'Marketing', tone: 'red' },
    { name: 'Business', tone: 'orange' },
    { name: 'Photography', tone: 'purple' },
    { name: 'Music', tone: 'pink' },
  ];

  const levels = ['Beginner', 'Intermediate', 'Advanced'];
  const durations = ['2h 30m', '3h 15m', '4h', '5h 45m', '6h 20m'];
  const authors = [
    { name: 'Alex Johnson', avatar: '/avatars/alex.jpg' },
    { name: 'Maria Garcia', avatar: '/avatars/maria.jpg' },
    { name: 'James Wilson', avatar: '/avatars/james.jpg' },
    { name: 'Sarah Lee', avatar: '/avatars/sarah.jpg' },
  ];

  return Array.from({ length: count }, (_, i) => {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const author = authors[Math.floor(Math.random() * authors.length)];
    const price = Math.floor(Math.random() * 200) + 50;
    const hasDiscount = Math.random() > 0.7;
    const oldPrice = hasDiscount ? Math.floor(price * 1.5) : undefined;
    
    return {
      id: `course-${i + 1}`,
      title: `Complete ${category.name} Course ${i + 1}: Master the Fundamentals`,
      description: `Learn everything you need to know about ${category.name} with this comprehensive course.`,
      category: category.name,
      categoryTone: category.tone as any,
      price,
      oldPrice,
      rating: Number((Math.random() * 1 + 4).toFixed(1)), // 4.0 - 5.0
      ratingCount: Math.floor(Math.random() * 1000) + 50,
      students: `${Math.floor(Math.random() * 5000) + 100} students`,
      level: levels[Math.floor(Math.random() * levels.length)],
      duration: durations[Math.floor(Math.random() * durations.length)],
      authorName: author.name,
      authorAvatarUrl: author.avatar,
      imageUrl: `/images/courses/course-${(i % 12) + 1}.jpg`,
      href: `/courses/course-${i + 1}`,
    };
  });
};

export const mockCourses = generateMockCourses(24);

export const categories = [
  'All Categories',
  'Design',
  'Development',
  'Marketing',
  'Business',
  'Photography',
  'Music',
];

export const sortOptions = [
  'Most Popular',
  'Highest Rated',
  'Newest',
  'Price: Low to High',
  'Price: High to Low',
];
