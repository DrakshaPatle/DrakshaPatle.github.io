import React from 'react'
import './Header.css'



const Header = () => {

	return (
		<>
			<app-navbar _ngcontent-c3="" className="ui-g-12 no-padding-left-right no-padding-top sm-white-background snipcss-C77xg" _nghost-c2="" ng-reflect-active-index="1">


				<div _ngcontent-c2="" className="ui-g-12 " id="headsection">


					<h1 _ngcontent-c2="" className="white-color snipcss0-1-1-2 tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
						5ELEMENTS
					</h1>


					<p _ngcontent-c2="" className="white-color snipcss0-1-1-3">
						COST FINDER
					</p>


				</div>
				<div _ngcontent-c2="" className="ui-g-12 ui-md-8 ui-md-offset-2 no-padding-top" id="stepssection">
					<p-steps _ngcontent-c2="" styleclassName="steps-custom" ng-reflect-active-index="1" ng-reflect-model="[object Object],[object Object" ng-reflect-style-className="steps-custom">
						<div className="steps-custom ui-steps ui-widget ui-helper-clearfix ui-steps-readonly" ng-reflect-klass="steps-custom" ng-reflect-ng-className="[object Object]">
							<ul role="tablist">
								
								<li className="ui-steps-item ui-state-default ui-state-complete ui-state-disabled ui-steps-incomplete ng-star-inserted" ng-reflect-ng-className="[object Object]">
									<a className="ui-menuitem-link ng-star-inserted tether-target-attached-top tether-abutted tether-abutted-top tether-element-attached-top tether-element-attached-center tether-target-attached-center" href="#">
										<span className="ui-steps-number tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
											1
										</span>
										<span classNameName="ui-steps-title tether-target-attached-top tether-abutted tether-abutted-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
											Space Details
										</span>
									</a>
								</li>

								<li className="ui-steps-item ui-state-highlight ui-steps-current ng-star-inserted" ng-reflect-ng-className="[object Object]">
									<a className="ui-menuitem-link ng-star-inserted" href="#">
										<span className="ui-steps-number">
											2
										</span>
										<span className="ui-steps-title">
											Your Needs
										</span>
									</a>
								</li>

								<li className="ui-steps-item ui-state-default ui-state-disabled ui-steps-incomplete ng-star-inserted" ng-reflect-ng-className="[object Object]">
									<a className="ui-menuitem-link ng-star-inserted" href="#">
										<span className="ui-steps-number">
											3
										</span>
										<span className="ui-steps-title">
											Get Estimate
										</span>
									</a>
								</li>
							</ul>
						</div>
					</p-steps>
				</div>

			</app-navbar>




		</>
	)
}

export default Header