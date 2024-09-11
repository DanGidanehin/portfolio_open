import { BrowserRouter } from "react-router-dom";
import {
	About,
	Motivation,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	Works,
	StarsCanvas,
  Media
} from "@components";

function App() {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
					<Navbar />
					<Hero />
				</div>
				<About />
				<Motivation />
				<Experience />
				<Tech />
				<Works />
				<div className="relative z-0">
					<Contact />
          <Media/>
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
