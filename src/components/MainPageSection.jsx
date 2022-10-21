import { useState } from "react";
import styles from "../index.css"

const MainPageSection = (props) => {
  const [clickState, setClickState] = useState(false);

	const arrowClickedStyle = {
    "background": "transparent",
    "border": "none",
    "font-size": "-",
		"transform": "rotate(-180deg)",
		"transition": "transform 300ms ease"
	}
	const arrowUnclickedStyle = {
    "background": "transparent",
    "border": "none",
    "font-size": "-",
		"transform": "",
		"transition": "transform 300ms ease"
	}
	const handleArrowClick = () => {
		setClickState(prevState => !prevState)
	}

  const {items, title } = props;

  return (
    <div className="main-page--section">
      <div className="main-page--section--first-row">
        <h3>{title}</h3>
        <button
          style={clickState ? arrowClickedStyle : arrowUnclickedStyle}
          onClick={handleArrowClick}
        >
          <img src="./images/navbarArrow.png" alt="logo" className="main-section--first-row--arrow"/>
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
