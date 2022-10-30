import NavBar from "../components/NavBar";

const NavBarLayout = ({children}) => {

    return (
        <>
            <NavBar />
            {children}
        </>
    )
}

export default NavBarLayout;