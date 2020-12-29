import React, { useState } from "react";
import styles from "./Card.module.css";
import scissors from "../../../../images/content_cut-24px.svg";

const Card = ({ title, text, image, category, publisher, url }) => {
  const [Hover, setHover] = useState(false);
  const [Scrap, setScrap] = useState(false);

  const onMouseEnterHandler = () => {
    setHover(true);
  };

  const onMouseLeaveHandler = () => {
    setHover(false);
  };

  const onScrapHandler = () => {
    setScrap(true);
    setTimeout(() => {
      setScrap(false);
    }, 2000);
  };

  const renderOptions = () => {
    return category.map((opt) => <option>{opt}</option>);
  };
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${image})` }}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
    >
      {!Hover && !Scrap && <div className={styles.title}>{title}</div>}
      {Hover && !Scrap && (
        <div className={styles.hcontainer}>
          <div className={styles.background}></div>
          <div className={styles.hover}>
            <div className={styles.hover__category}>
              <select className={styles.hover__category_opt}>
                {renderOptions()}
              </select>
              <div onClick={onScrapHandler}>저장</div>
            </div>
            <div className={styles.hover__title}>{title}</div>
            <div className={styles.hover__text}>{text}</div>
            <a href={`https://naver.com`}>
              <div className={styles.hover__publisher}>
                {publisher} 기사 보러가기
              </div>
            </a>
          </div>
        </div>
      )}
      {Scrap && (
        <div className={styles.hcontainer}>
          <div className={styles.background}></div>
          <div className={styles.scrap}>
            <div className={styles.scrap__icon}>
              <span>- - - - - - - - - - - - - - - -</span>
              <img src={scissors} />
            </div>
            <div className={styles.scrap__message}>
              내 스크랩 저장소에 추가!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;