import { useState } from "react";

const MainPageSection = (props) => {
  const [clickState, setClickState] = useState(true);
  const handleArrowClick = () => {
    setClickState(prevState => !prevState)
  }

  const { items, title } = props;

  return (
    <div className="main-page--section">
      <div className="main-page--section--first-row">
        <h3>{title}</h3>
        <button
          onClick={handleArrowClick}
          className={
            clickState ?
                "main-page--section--first-row--button arrowClicked" :
                "main-page--section--first-row--button arrowUnclicked"
          }
        >
          <img src="./images/navbarArrow.png" alt="logo" />
        </button>
      </div>
      {clickState && (
        <div className={"main-page--section--second-row"}>
          {items.map((item) => (
            <div className={"main-page--section--second-row--figure"} key={item.id}>
              <img src={item.image} alt="logo" className="mp--s--sr--fig-img" />
              <p className="mp--s--sr-fig-title">{item.title}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MainPageSection;
