// src/components/FeaturedCourses/featuredCourses.mock.ts

export type FeaturedCourse = {
  id: string;
  title: string;
  category: string;
  categoryTone?: "green" | "red" | "orange" | "blue" | "gray";
  price: number;
  oldPrice?: number;
  rating: number;        // e.g. 5.0
  ratingCount: number;   // e.g. 357_914
  students: string;      // e.g. "265.7K students"
  level: string;         // e.g. "Beginner"
  duration: string;      // e.g. "6h 00m"
  authorName: string;
  authorAvatarUrl: string;
  imageUrl: string;
  href?: string;
};

export const featuredCoursesMock: FeaturedCourse[] = [
  {
    id: "1",
    category: "HEALTH & FITNESS",
    categoryTone: "green",
    title: "Investing In Stocks The Complete Course! (13 H...)",
    price: 14,
    oldPrice: 26,
    rating: 5.0,
    ratingCount: 357_914,
    students: "265.7K students",
    level: "Beginner",
    duration: "6h 00m",
    authorName: "Kevin Gilbert",
    authorAvatarUrl: "https://placehold.co/64x64",
    imageUrl: "https://placehold.co/220x188",
    href: "#",
  },
  {
    id: "2",
    category: "PERSONAL DEVELOPMENT",
    categoryTone: "red",
    title: "Google Analytics Certification - Learn How To...",
    price: 14,
    oldPrice: 26,
    rating: 5.0,
    ratingCount: 357_914,
    students: "265.7K students",
    level: "Beginner",
    duration: "6h 00m",
    authorName: "Kevin Gilbert",
    authorAvatarUrl: "https://placehold.co/64x64",
    imageUrl: "https://placehold.co/220x188",
    href: "#",
  },
  {
    id: "3",
    category: "PRODUCTIVITY",
    categoryTone: "gray",
    title: "Adobe XD for Web Design: Essential Principles",
    price: 14,
    oldPrice: 26,
    rating: 5.0,
    ratingCount: 357_914,
    students: "265.7K students",
    level: "Beginner",
    duration: "6h 00m",
    authorName: "Kevin Gilbert",
    authorAvatarUrl: "https://placehold.co/64x64",
    imageUrl: "https://placehold.co/220x188",
    href: "#",
  },
  {
    id: "4",
    category: "MUSIC",
    categoryTone: "orange",
    title: "The Python Mega Course: Build 10 Real World ...",
    price: 14,
    oldPrice: 26,
    rating: 5.0,
    ratingCount: 357_914,
    students: "265.7K students",
    level: "Beginner",
    duration: "6h 00m",
    authorName: "Kevin Gilbert",
    authorAvatarUrl: "https://placehold.co/64x64",
    imageUrl: "https://placehold.co/220x188",
    href: "#",
  },
];
