import services from "../static/services.json"
import masters from "../static/masters.json"
import products from "../static/products.json"
import MainPageSection from "../components/MainPageSection"
import LoginPage from "./login";
import NavBarLayout from "../layouts/NavBarLayout";

const MainPage = ({user}) => {

	if (!user) {
		return <LoginPage/>
	}

	return (
		<NavBarLayout>
			<MainPageSection items={services} title={"Services"}/>
			<MainPageSection items={products} title={"Products"}/>
			<MainPageSection items={masters} title={"Masters"}/>
		</NavBarLayout>
	);
}

export default MainPage;