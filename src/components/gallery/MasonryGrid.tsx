"use client";

import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { projects } from "@/app/resources/content";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {projects.items.map((project, index) => (
        <a
          key={index}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectLink}
          title={`${project.title} - View on GitHub`}
        >
          <SmartImage
            priority={index < 10}
            sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
            radius="m"
            aspectRatio="16 / 9"
            src={project.image}
            alt={project.title}
            className={styles.gridItem}
          />
        </a>
      ))}
    </Masonry>
  );
}
