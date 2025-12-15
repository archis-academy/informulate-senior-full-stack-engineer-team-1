import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router";
import BestSellingCourses from "./best-selling-courses";
import CourseCard from "./course-card";
import type { BestSellingCourse } from "@/types/course";

const mockCourse: BestSellingCourse = {
  id: "1",
  description: "Test Course Description",
  category: "Development",
  price: "$99",
  rating: 4.5,
  students: "100K students",
  imageUrl: "https://example.com/image.jpg",
  href: "/courses/1",
};

describe("BestSellingCourses", () => {

  it("renders multiple course cards", () => {
    render(
      <MemoryRouter>
        <BestSellingCourses />
      </MemoryRouter>
    );

    const cards = screen.getAllByRole("article");
    expect(cards.length).toBeGreaterThan(0);
  });

  it("has accessible section with aria-labelledby", () => {
    render(
      <MemoryRouter>
        <BestSellingCourses />
      </MemoryRouter>
    );

    const section = document.querySelector(
      'section[aria-labelledby="best-selling-courses-heading"]'
    );
    expect(section).toBeInTheDocument();
  });
});

describe("CourseCard", () => {
  it("renders course description", () => {
    render(
      <MemoryRouter>
        <CourseCard course={mockCourse} />
      </MemoryRouter>
    );

    expect(
      screen.getByRole("heading", { name: mockCourse.description })
    ).toBeInTheDocument();
  });

  it("renders course category", () => {
    render(
      <MemoryRouter>
        <CourseCard course={mockCourse} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockCourse.category)).toBeInTheDocument();
  });

  it("renders course price", () => {
    render(
      <MemoryRouter>
        <CourseCard course={mockCourse} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockCourse.price)).toBeInTheDocument();
  });

  it("renders course rating", () => {
    render(
      <MemoryRouter>
        <CourseCard course={mockCourse} />
      </MemoryRouter>
    );

    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("renders course students count", () => {
    render(
      <MemoryRouter>
        <CourseCard course={mockCourse} />
      </MemoryRouter>
    );

    expect(screen.getByText(mockCourse.students)).toBeInTheDocument();
  });

  it("renders image with correct alt text", () => {
    render(
      <MemoryRouter>
        <CourseCard course={mockCourse} />
      </MemoryRouter>
    );

    const img = screen.getByRole("img", { name: mockCourse.description });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", mockCourse.imageUrl);
  });

  it("renders as a clickable link", () => {
    render(
      <MemoryRouter>
        <CourseCard course={mockCourse} />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: mockCourse.description });
    expect(link).toHaveAttribute("href", mockCourse.href);
  });
});
