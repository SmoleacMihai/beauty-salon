import {useNavigate} from "react-router-dom";


const NavBar = () => {
    const goTo = useNavigate();
  return (
    <nav>
      <img src="./images/navLogo.png" alt="logo" />
      <div className="navbar--title">
        <h1 className="navbar--title--h1">PowerBeauty</h1>
        <p className="navbar--title--p">Beauty is our duty</p>
      </div>
      <div className="navbar--links">
        <div

          className={"navbar--link"}
        >Help</div>
        <div
          onClick={() => {goTo("/order")}}
          className={"navbar--link"}
        >Orders</div>
      </div>
      <div className="navbar--line"></div>
      <div className="navbar--account">
        <img src="./images/Avatar.png" alt="account" className="navbar--account-logo" />
        <p className="navbar--account-name">Salon Registration</p>
        <img src="./images/navbarArrow.png" alt="arrow" className="navbar--arrow" />
      </div>
    </nav >
  );
}

export default NavBar;