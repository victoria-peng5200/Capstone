"use client";
import React, { useEffect, useState } from "react";
import styles from "@/app/news/news.module.css";

const NewsPage = () => {
  const words = [
    "Welcome to Canadian Alliance for Intergenerational Living",
    "Our Project is now accepting applications through February 29, 2024",
    "Visit www.intergenliving.ca to apply",
  ];
  const [part, setPart] = useState("");
  const [i, setI] = useState(0);
  const [offset, setOffset] = useState(0);
  const [forwards, setForwards] = useState(true);
  const [skipCount, setSkipCount] = useState(0);
  const skipDelay = 15;
  const speed = 70;

  useEffect(() => {
    const wordFlick = setInterval(() => {
      setOffset((currentOffset) => {
        let newOffset = currentOffset;
        let newForwards = forwards;
        let newI = i;
        let newSkipCount = skipCount;

        if (forwards) {
          if (currentOffset >= words[i].length) {
            newSkipCount++;
            if (newSkipCount === skipDelay) {
              newForwards = false;
              newSkipCount = 0;
            }
          }
        } else {
          if (currentOffset === 0) {
            newForwards = true;
            newI = (i + 1) % words.length;
            newOffset = 0;
          }
        }

        if (newSkipCount === 0) {
          if (newForwards) {
            newOffset++;
          } else {
            newOffset--;
          }
        }

        setForwards(newForwards);
        setI(newI);
        setSkipCount(newSkipCount);

        return newOffset;
      });

      setPart(words[i].substr(0, offset));
    }, speed);

    return () => clearInterval(wordFlick);
  }, [forwards, i, offset, skipCount, words]);

  return (
    <div className={styles.container}>
      <div className={styles.word}>{part}</div>
      {/* <h1 className={styles.text}>Welcome to Canadian Alliance for Intergenerational Living</h1> */}
      <img className={styles.image} src="about.png" alt="" />
    </div>
  );
};

export default NewsPage;
