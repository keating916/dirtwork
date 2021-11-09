import Topnav from "../components/Topnav";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="App">
			<Topnav />
			<div className="body">
				<Component {...pageProps} />
			</div>
			<ContactForm />
			<Footer />
		</div>
	);
}

export default MyApp;
