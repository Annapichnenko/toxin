import styles from "./Pagination.module.scss";
import React, { useEffect, useState } from "react";

const range = (from, to, step = 1, currentPage) => {
  let i = from;
  let range = [];

  while (i <= to) {
    if (currentPage < 3) {
      range = [1, 2, 3, "...", to];
    } else if (currentPage >= 3 && currentPage <= to - 3) {
      range = [
        1,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        to,
      ];
    } else if (currentPage <= to - 2) {
      range = [1, "...", currentPage - 1, currentPage, currentPage + 1, to];
    } else if (currentPage >= to - 2 && currentPage <= to) {
      range = [1, 2, "...", to - 2, to - 1, to];
    }
    i += step;
  }

  return range;
};

export const Pagination = ({
  totalRecords = null,
  pageLimit = 30,
  pageNeighbours = 0,
  onPageChanged,
}) => {
  pageLimit = typeof pageLimit === "number" ? pageLimit : 30;
  totalRecords = typeof totalRecords === "number" ? totalRecords : 0;

  pageNeighbours =
    typeof pageNeighbours === "number"
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;

  const totalPages = Math.ceil(totalRecords / pageLimit);
  console.log(totalPages, totalRecords, pageLimit);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    gotoPage(1);
  }, []);

  const gotoPage = (page) => {
    const currentPage = Math.max(0, Math.min(page, totalPages));

    const paginationData = {
      currentPage,
      totalPages: totalPages,
      pageLimit: pageLimit,
      totalRecords: totalRecords,
    };

    setCurrentPage(currentPage);
    onPageChanged(paginationData);
  };

  const handleClick = (page, evt) => {
    console.log(page, "handleClick");
    evt.preventDefault();
    gotoPage(page);
  };

  if (totalPages === 1) return null;

  const pages = range(1, totalPages, 1, currentPage);
  return (
    <>
      <nav aria-label="Countries Pagination">
        <ul className={styles.pagination}>
          {pages.map((page, index) => {
            return (
              <li
                key={index}
                className={`${styles.pageItem} ${
                  currentPage === page ? styles.pageItemActive : ""
                }`}
              >
                <span
                  className={styles.pageLink}
                  onClick={(e) => handleClick(page, e)}
                >
                  {page}
                </span>
              </li>
            );
          })}
          {currentPage !== totalPages && (
            <div
              onClick={(e) => handleClick(currentPage + 1, e)}
              className={styles.wrapper}
            >
              <button className={styles.button}></button>
              <span className={styles.icon}></span>
            </div>
          )}
        </ul>
      </nav>
      <span className={styles.title}>
        1 – {4 * pageLimit} из {100}+ вариантов аренды
      </span>
    </>
  );
};
