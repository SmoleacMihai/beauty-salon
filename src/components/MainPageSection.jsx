import { useState } from "react";
import styles from "../index.css"

const MainPageSection = (props) => {
  const [clickState, setClickState] = useState(false);

	const arrowClickedBtnStyle = {
		transform: "rotate(-180deg)",
		transition: "transform 300ms ease"
	}
	const arrowUnclickedBtnStyle = {
		transform: "",
		transition: "transform 300ms ease"
	}
	const handleArrowClick = () => {
		setClickState(prevState => !prevState)
	}

  const {items, title } = props;

  return (
    <div className={styles.services}>
      <div className={styles.header__items}>
        <h3>{title}</h3>
        <button
          style={clickState ? arrowClickedBtnStyle : arrowUnclickedBtnStyle}
          onClick={handleArrowClick}
        >
          <img src="./images/arrow-up.png" alt="logo" />
        </button>
      </div>
      {clickState && (
        <div className={styles.items}>
          {items.map((item) => (
            <div className={styles.item} key={item.id}>
              <img src={item.image} alt="logo" />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPageSection;
