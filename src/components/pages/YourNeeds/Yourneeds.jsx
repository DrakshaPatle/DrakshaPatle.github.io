import React, { useEffect } from 'react'
import { bedroomCard, bathroomCard } from '../../../App'
import './Yourneeds.css'
export const Yourneeds = ({noOfBedrooms, noOfBathrooms, area, setArea, setNoOfBathrooms, setNoOfBedrooms, cards, setCards}) => {

	const addOrRemoveBedroomCards = (e)=>{
		const additional_cards = [];
		for (let index = 2; index <= noOfBedrooms+1; index++) {
			let newBedroomCard = bedroomCard(index)
			additional_cards.push(newBedroomCard);
		}

		for (let index = 2; index <= noOfBathrooms; index++) {
			let newBathroomCard = bathroomCard(index)
			additional_cards.push(newBathroomCard);
		}
		setCards(additional_cards);
	}

	const addOrRemoveBathroomCards = (e)=>{
		const additional_cards = [];
		for (let index = 2; index <= noOfBedrooms; index++) {
			let newBedroomCard = bedroomCard(index)
			additional_cards.push(newBedroomCard);
		}

		for (let index = 2; index <= noOfBathrooms+1; index++) {
			let newBathroomCard = bathroomCard(index)
			additional_cards.push(newBathroomCard);
		}
		setCards(additional_cards);
	}
	return (
		<>
			<div _ngcontent-c1="" className="ui-g-12 ui-lg-12 ">
				<h2 _ngcontent-c1="" className="text-center theme-heading-size  tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
					Budget your Spend
				</h2>


				<p _ngcontent-c1="" className="text-center ">
					CostFinder helps you figure out your average spend based on the elements you like in your space
				</p>



				<div _ngcontent-c1="" className="ui-g-12 ui-md-6">
					<p _ngcontent-c1="" className="sub-heading" style={{textAlign:"center"}}>
						Start with how many Bedrooms do you have?
					</p>
					<div _ngcontent-c1="" className="ui-g-12 ui-md-10 ui-md-offset-1 ui-lg-4 ui-lg-offset-4">
						<div _ngcontent-c1="" className="ui-g-8 ui-g-offset-2 ui-inputgroup">
							<button onClick={()=>{setNoOfBedrooms(noOfBedrooms-1); setArea(area-120); addOrRemoveBedroomCards();}} _ngcontent-c1="" className="ui-button-success add-theme-border add-theme-background-color ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" icon="fa fa-minus" pbutton="" type="button" ng-reflect-icon="fa fa-minus">
								<span aria-hidden="true" className="ui-button-icon-left ui-clickable fa fa-minus">
								</span>
								<span className="ui-button-text ui-clickable">
									ui-btn
								</span>
							</button>

							<input _ngcontent-c1="" className="add-theme-border ng-pristine ng-valid ui-inputtext ui-corner-all ui-state-default ui-widget ui-state-filled ng-touched" pinputtext="" placeholder="No. of Bedrooms" readonly="" type="text" ng-reflect-model="1" value={noOfBedrooms}/>

							<button onClick={()=>{setNoOfBedrooms(noOfBedrooms+1); setArea(area+120); addOrRemoveBedroomCards();}} _ngcontent-c1="" className="ui-button-danger add-theme-border add-theme-background-color ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" icon="fa fa-plus" pbutton="" type="button" ng-reflect-icon="fa fa-plus">
								<span aria-hidden="true" className="ui-button-icon-left ui-clickable fa fa-plus">
								</span>
								<span className="ui-button-text ui-clickable">
									ui-btn
								</span>
							</button>
						</div>
					</div>
				</div>

				<div _ngcontent-c1="" className="ui-g-12 ui-md-6">
					<p _ngcontent-c1="" className="sub-heading" style={{textAlign:"center"}}>
						Start with how many Bathrooms do you have?
					</p>
					<div _ngcontent-c1="" className="ui-g-12 ui-md-10 ui-md-offset-1 ui-lg-4 ui-lg-offset-4">
						<div _ngcontent-c1="" className="ui-g-8 ui-g-offset-2 ui-inputgroup">
							<button onClick={()=>{setNoOfBathrooms(noOfBathrooms-1); setArea(area-40); addOrRemoveBathroomCards();}} _ngcontent-c1="" className="ui-button-success add-theme-border add-theme-background-color ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" icon="fa fa-minus" pbutton="" type="button" ng-reflect-icon="fa fa-minus">
								<span aria-hidden="true" className="ui-button-icon-left ui-clickable fa fa-minus">
								</span>
								<span className="ui-button-text ui-clickable">
									ui-btn
								</span>
							</button>
							<input _ngcontent-c1="" className="add-theme-border ng-untouched ng-pristine ng-valid ui-inputtext ui-corner-all ui-state-default ui-widget ui-state-filled" pinputtext="" placeholder="No. of Bathrooms" readonly="" type="text" ng-reflect-model="1" value={noOfBathrooms}/>
							<button onClick={()=>{setNoOfBathrooms(noOfBathrooms+1); setArea(area+40); addOrRemoveBathroomCards();}} _ngcontent-c1="" className="ui-button-danger add-theme-border add-theme-background-color ui-button ui-widget ui-state-default ui-corner-all ui-button-icon-only" icon="fa fa-plus" pbutton="" type="button" ng-reflect-icon="fa fa-plus">
								<span aria-hidden="true" className="ui-button-icon-left ui-clickable fa fa-plus">
								</span>
								<span className="ui-button-text ui-clickable">
									ui-btn
								</span>
							</button>
						</div>
					</div>
				</div>

				<div _ngcontent-c1="" className="ui-g-12 ui-md-2 ui-md-offset-5">
					<p _ngcontent-c1="">
						Assumed Carpet Area (Sq. ft.)
					</p>
					<p _ngcontent-c1="" id="floorarea">
						{area} Sq. ft.
					</p>
					<p _ngcontent-c1="">
						Please enter your Carpet Area (Sq. ft.)
					</p>


					<div _ngcontent-c1="" className="ui-g-12 ui-md-6 ui-md-offset-3 no-padding-left-right">
						<input _ngcontent-c1="" className="add-theme-border ng-untouched ng-pristine ui-inputtext ui-corner-all ui-state-default ui-widget ng-valid ui-state-filled" id="floorarea" min="300" name="myfield" ng-minlength="3" pinputtext="" required="" type="number" ng-reflect-required="" ng-reflect-name="myfield" ng-reflect-model="0" />
						<div _ngcontent-c1="" style={{ color: "red" }}>
							Your field is empty
						</div>
					</div>
				</div>


				<div _ngcontent-c1="" className="ui-g-12 ui-md-12" id="cardsholdersection">
					<p _ngcontent-c1="" className="" style={{textAlign:"center"}}>
						Assumed Configuration
					</p>
					<div _ngcontent-c1="" className="ui-g-12 ui-md-10 ui-md-offset-1 ui-lg-6 ui-lg-offset-3 ui-xl-8 ui-xl-offset-2">
						<div _ngcontent-c1="" className="cards ui-g-12 ui-md-6 ui-md-offset-3 theme-card no-bottom-padding">
							<div _ngcontent-c1="" className="ui-g-3 ui-md-3">
								<img _ngcontent-c1="" className="theme-img-responsive" id="themeimage" src="http://costfinder.consdeployer.com/assets/roomselection/livingroom.PNG" />
							</div>
							<div _ngcontent-c1="" className="ui-g-7 ui-md-7 card-data-padding-top">
								Living Room
							</div>
							<div _ngcontent-c1="" className="ui-g-2 ui-md-2 card-data-padding-top">
								1
							</div>
						</div>
					</div>



					<div _ngcontent-c1="" className="ui-g-12 ui-md-10 ui-md-offset-1 ui-lg-6 ui-lg-offset-3 ui-xl-8 ui-xl-offset-2">
						<div _ngcontent-c1="" className="cards ui-g-12 ui-md-6 ui-md-offset-3 theme-card no-bottom-padding">
							<div _ngcontent-c1="" className="ui-g-3 ui-md-3">
								<img _ngcontent-c1="" className="theme-img-responsive" id="themeimage" src="http://costfinder.consdeployer.com/assets/roomselection/bedroom.png" />
							</div>
							<div _ngcontent-c1="" className="ui-g-7 ui-md-7 card-data-padding-top">
								Master Bedroom
							</div>
							<div _ngcontent-c1="" className="ui-g-2 ui-md-2 card-data-padding-top">
								1
							</div>
						</div>
					</div>



					<div _ngcontent-c1="" className="ui-g-12 ui-md-10 ui-md-offset-1 ui-lg-6 ui-lg-offset-3 ui-xl-8 ui-xl-offset-2">
						<div _ngcontent-c1="" className="cards ui-g-12 ui-md-6 ui-md-offset-3 theme-card no-bottom-padding">
							<div _ngcontent-c1="" className="ui-g-3 ui-md-3">
								<img _ngcontent-c1="" className="theme-img-responsive" id="themeimage" src="http://costfinder.consdeployer.com/assets/roomselection/bathroom.png" />
							</div>
							<div _ngcontent-c1="" className="ui-g-7 ui-md-7 card-data-padding-top">
								Master Bathroom
							</div>



							<div _ngcontent-c1="" className="ui-g-2 ui-md-2 card-data-padding-top">
								1
							</div>
						</div>
					</div>
					<div _ngcontent-c1="" className="ui-g-12 ui-md-10 ui-md-offset-1 ui-lg-6 ui-lg-offset-3 ui-xl-8 ui-xl-offset-2">
						<div _ngcontent-c1="" className="cards ui-g-12 ui-md-6 ui-md-offset-3 theme-card no-bottom-padding">
							<div _ngcontent-c1="" className="ui-g-3 ui-md-3">
								<img _ngcontent-c1="" className="theme-img-responsive" id="themeimage" src="http://costfinder.consdeployer.com/assets/roomselection/kitchen.png" />
							</div>
							<div _ngcontent-c1="" className="ui-g-7 ui-md-7 card-data-padding-top">
								Kitchen
							</div>
							<div _ngcontent-c1="" className="ui-g-2 ui-md-2 card-data-padding-top">
								1
							</div>
						</div>
					</div>
					<div _ngcontent-c1="" className="ui-g-12">
					</div>
				</div>

				{cards.map(card=>card)}




				<div _ngcontent-c1="" className="cards ui-g-10 ui-g-offset-1 ui-md-8 ui-md-offset-2">
					<div _ngcontent-c1="" className="ui-g-2 ui-g-offset-5 ui-sm-4 ui-sm-offset-4 ui-md-2 ui-md-offset-5" id="button-holder-div">
						<button _ngcontent-c1="" className="ui-button-raised ui-button-rounded theme-button" id="nextbutton" required="" type="button" tabindex="0" ng-reflect-router-link="/productselection,0,0,0" disabled="">
							Next &gt;
						</button>
					</div>
				</div>
			</div>




		</>
	)
}
