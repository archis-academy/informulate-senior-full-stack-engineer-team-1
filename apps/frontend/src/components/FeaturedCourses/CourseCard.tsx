// src/components/FeaturedCourses/CourseCard.tsx

import React from "react";
import styles from "./FeaturedCoursesSection.module.css";
import type { FeaturedCourse } from "./FeaturedCourses.mock";

type Props = {
  course: FeaturedCourse;
};

function formatMoney(value: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function formatCount(value: number) {
  return new Intl.NumberFormat("en-US").format(value);
}

// Reusable course card used across featured/best-selling sections.
export function CourseCard({ course }: Props) {
  const badgeClass =
    course.categoryTone === "green"
      ? styles.badgeGreen
      : course.categoryTone === "red"
      ? styles.badgeRed
      : course.categoryTone === "orange"
      ? styles.badgeOrange
      : course.categoryTone === "blue"
      ? styles.badgeBlue
      : styles.badgeGray;

  return (
    <a
      className={styles.cardLink}
      href={course.href ?? "#"}
      aria-label={course.title}
    >
      <article className={styles.card}>
        <div className={styles.imageWrap}>
          <img className={styles.image} src={course.imageUrl} alt={course.title} />
        </div>

        <div className={styles.content}>
          <div className={styles.topRow}>
            <span className={`${styles.badge} ${badgeClass}`}>{course.category}</span>

            <div className={styles.priceRow} aria-label="Price">
              <span className={styles.price}>{formatMoney(course.price)}</span>
              {course.oldPrice != null && (
                <span className={styles.oldPrice}>{formatMoney(course.oldPrice)}</span>
              )}
            </div>
          </div>

          <h3 className={styles.cardTitle} title={course.title}>
            {course.title}
          </h3>

          <div className={styles.subRow}>
            <div className={styles.author}>
              <img
                className={styles.avatar}
                src={course.authorAvatarUrl}
                alt={course.authorName}
              />
              <span className={styles.authorName}>{course.authorName}</span>
            </div>

            <div className={styles.rating} aria-label={`Rating ${course.rating} out of 5`}>
              <StarIcon />
              <span className={styles.ratingValue}>{course.rating.toFixed(1)}</span>
              <span className={styles.ratingCount}>({formatCount(course.ratingCount)})</span>
            </div>
          </div>

          <div className={styles.footer}>
            <MetaItem icon={<UsersIcon />} text={course.students} />
            <MetaItem icon={<LevelIcon />} text={course.level} />
            <MetaItem icon={<ClockIcon />} text={course.duration} />
          </div>
        </div>
      </article>
    </a>
  );
}

function MetaItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className={styles.metaItem}>
      <span className={styles.metaIcon} aria-hidden="true">
        {icon}
      </span>
      <span className={styles.metaText}>{text}</span>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" className={styles.star} aria-hidden="true">
      <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className={`${styles.icon} ${styles.iconUsers}`}
      aria-hidden="true"
    >
      <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.98 1.97 3.45V19h7v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  );
}

function LevelIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className={`${styles.icon} ${styles.iconLevel}`}
      aria-hidden="true"
    >
      <path d="M3 17h3v4H3v-4zm5-6h3v10H8V11zm5-4h3v14h-3V7zm5-4h3v18h-3V3z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      className={`${styles.icon} ${styles.iconClock}`}
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 1 0 10 10A10.01 10.01 0 0 0 12 2zm1 11h-5V6h2v5h3z" />
    </svg>
  );
}
