import NavBar from "../components/NavBar"
import services from "../static/services.json"
import masters from "../static/masters.json"
import products from "../static/products.json"
import MainPageSection from "../components/MainPageSection"
import LoginPage from "./login";

const MainPage = ({user}) => {

	if (!user) {
		return <LoginPage/>
	}

	return (
		<>
			<NavBar/>
			<MainPageSection items={services} title={"Services"}/>
			<MainPageSection items={products} title={"Products"}/>
			<MainPageSection items={masters} title={"Masters"}/>
		</>
	);
}

export default MainPage;