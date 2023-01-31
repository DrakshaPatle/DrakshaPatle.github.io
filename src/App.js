import './App.css';
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import { Contact } from './components/Contact/contact'
import { Yourneeds } from './components/pages/YourNeeds/Yourneeds'
import { Costestimate } from './components/pages/CostEstimate/Costestimate'
 import { Spacedetails } from './components/pages/SpaceDetails/Spacedetails'
import { useState } from 'react';
import {ToggleSwitch} from './toggle-switch/toggleSwitch';

// import { library } from '@fortawesome/fontawesome-svg-core';




export function bedroomCard() {
	return <>
		<div _ngcontent-c1="" className="ui-g-12 ui-md-10 ui-md-offset-1 ui-lg-6 ui-lg-offset-3 ui-xl-8 ui-xl-offset-2">
			<div _ngcontent-c1="" className="cards ui-g-12 ui-md-6 ui-md-offset-3 theme-card no-bottom-padding">
				<div _ngcontent-c1="" className="ui-g-3 ui-md-3">
					<img _ngcontent-c1="" className="theme-img-responsive" id="themeimage" src="http://costfinder.consdeployer.com/assets/roomselection/bedroom.png" />
				</div>
        
				<div _ngcontent-c1="" className="ui-g-7 ui-md-7 card-data-padding-top">
					Bedroom 
				</div>
				<div _ngcontent-c1="" className="ui-g-2 ui-md-2 card-data-padding-top">
					1
				</div>
			</div>
		</div>
	</>

}



export function bathroomCard() {
	return <>
		<div _ngcontent-c1="" className="ui-g-12 ui-md-10 ui-md-offset-1 ui-lg-6 ui-lg-offset-3 ui-xl-8 ui-xl-offset-2">
			<div _ngcontent-c1="" className="cards ui-g-12 ui-md-6 ui-md-offset-3 theme-card no-bottom-padding">
				<div _ngcontent-c1="" className="ui-g-3 ui-md-3">
					<img _ngcontent-c1="" className="theme-img-responsive" id="themeimage" src="http://costfinder.consdeployer.com/assets/roomselection/bathroom.png" />
				</div>
				<div _ngcontent-c1="" className="ui-g-7 ui-md-7 card-data-padding-top">
					Bathroom 
				</div>
				<div _ngcontent-c1="" className="ui-g-2 ui-md-2 card-data-padding-top">
					1
				</div>
			</div>
		</div>
	</>
}


function App() {



	const [area, setArea] = useState(510);
	const [noOfBedrooms, setNoOfBedrooms] = useState(1);
	const [noOfBathrooms, setNoOfBathrooms] = useState(1);



	const [bedroomCards, setBedroomCards] = useState([])
	const [bathroomCards, setBathroomCards] = useState([])

	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Yourneeds noOfBedrooms={noOfBedrooms} noOfBathrooms={noOfBathrooms} area={area} setNoOfBathrooms={setNoOfBathrooms} setNoOfBedrooms={setNoOfBedrooms} setArea={setArea} bedroomCards={bedroomCards} setBedroomCards={setBedroomCards} bathroomCards={bathroomCards} setBathroomCards={setBathroomCards} />} />
        
				  <Route path="/sd" element={<Spacedetails   toggle={true}/>} />  
        <Route path="/sd/ce" element={<Costestimate/>}></Route> 

		
        /* <Route path="/ct" element={<Contact/>}></Route>
        <Route path="/tt" element={<ToggleSwitch/>}></Route> 
			</Routes>
		</>
	);
}


export default App;
