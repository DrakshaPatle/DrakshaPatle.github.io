// import React, { useState } from 'react';
// import ReactSwitch from 'react-switch';

// function ToggleSwitch() {
//   const [checked, setChecked] = useState(false);

//   const handleChange = val => {
//     setChecked(val)

//   }

//   return (
//     <div className="app" style={{textAlign: "center"}}>
//       <h4>Toggle switch in React</h4>
//       <ReactSwitch
//         checked={checked}
//         onChange={handleChange}
//       />

//     </div>
//   );
// }
// export default ToggleSwitch;


import React from 'react'
import { useState } from 'react'
import './toggleswitch.css'
import{Contact} from '../components/Contact/contact';
export const ToggleSwitch = () => {

    const [toggle, setToggle] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    };

    return (

        <div>
            <button
                onClick={handleClick}


                class="fas fa-toggle-on">

            </button>

            {toggle ?


                <div
                    _ngcontent-c3=""
                    className="ui-g-12 ui-md-6 no-padding-top-bottom sm-left-right-no-padding snipcss0-1-1-38 snipcss-7hdJc"
                    id="room-product-details"
                >
                    <div _ngcontent-c3="" className="ui-g-12 white-background snipcss0-2-38-39">
                        <div _ngcontent-c3="" className="ui-g-12 top-padding snipcss0-3-39-40">
                            <p-checkbox
                                _ngcontent-c3=""
                                binary="true"
                                ng-reflect-binary="true"
                                ng-reflect-label="Enable Living Room"
                                ng-reflect-model="true"
                                className="ng-untouched ng-pristine ng-valid ng-star-inserted"
                            >
                                <div
                                    className="ui-chkbox ui-widget"
                                    ng-reflect-ng-class="ui-chkbox ui-widget"
                                >
                                    <div className="ui-helper-hidden-accessible">
                                        <input
                                            type="checkbox"
                                            ng-reflect-ng-class="[object Object]"
                                            name="undefined"
                                            defaultValue="undefined"
                                        />
                                    </div>
                                    <div
                                        className="ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-active"
                                        ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                        ng-reflect-ng-class="[object Object]"
                                    >
                                        <span
                                            className="ui-chkbox-icon ui-clickable pi pi-check"
                                            ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                            ng-reflect-ng-class="pi pi-check"
                                        ></span>
                                    </div>
                                </div>
                                <label
                                    className="ng-star-inserted ui-chkbox-label ui-label-active"
                                    ng-reflect-ng-class="[object Object]"
                                >
                                    Enable Living Room
                                </label>
                            </p-checkbox>
                        </div>
                        <div
                            _ngcontent-c3=""
                            className="ui-g-12 ui-md-12 ui-md-offset-0 snipcss0-3-39-48"
                        >
                            <div
                                _ngcontent-c3=""
                                lass="ui-g-12 ui-md-12 ui-md-offset-0"
                                className="snipcss0-4-48-49"
                            >
                                <div
                                    _ngcontent-c3=""
                                    className="ui-g-12 ui-md-12 text-left md-left-right-no-padding snipcss0-5-49-50"
                                >
                                    <p _ngcontent-c3="" className="no-top-bottom-margin snipcss0-6-50-51">
                                        How would you like to spend on this room?
                                    </p>
                                    <div
                                        _ngcontent-c3=""
                                        className="ui-g-12 ui-sm-4 ui-md-4 sm-left-right-no-padding md-left-right-no-padding snipcss0-6-50-52"
                                    >
                                        <p-radiobutton
                                            _ngcontent-c3=""
                                            inputid="opt1"
                                            label="Basic"
                                            name="livingroompackage"
                                            value="Option 1"
                                            ng-reflect-value="Option 1"
                                            ng-reflect-name="livingroompackage"
                                            ng-reflect-label="Basic"
                                            ng-reflect-input-id="opt1"
                                            className="ng-valid ng-dirty ng-touched snipcss0-7-52-53"
                                            ng-reflect-model="Option 3"
                                        >
                                            <div
                                                className="ui-radiobutton ui-widget snipcss0-8-53-54"
                                                ng-reflect-ng-class="ui-radiobutton ui-widget"
                                            >
                                                <div className="ui-helper-hidden-accessible snipcss0-9-54-55">
                                                    <input
                                                        type="radio"
                                                        id="opt1"
                                                        name="livingroompackage"
                                                        defaultValue="Option 1"
                                                        className="snipcss0-10-55-56"
                                                    />
                                                </div>
                                                <div
                                                    className="snipcss0-9-54-57 ui-radiobutton-box ui-widget ui-state-default"
                                                    ng-reflect-ng-class="[object Object]"
                                                >
                                                    <span
                                                        className="ui-radiobutton-icon ui-clickable snipcss0-10-57-58"
                                                        ng-reflect-klass="ui-radiobutton-icon ui-clickab"
                                                        ng-reflect-ng-class="[object Object]"
                                                    ></span>
                                                </div>
                                            </div>
                                            <label
                                                className="ng-star-inserted snipcss0-8-53-59 ui-radiobutton-label"
                                                ng-reflect-ng-class="[object Object]"
                                                htmlFor="opt1"
                                            >
                                                Basic
                                            </label>
                                        </p-radiobutton>
                                    </div>
                                    <div
                                        _ngcontent-c3=""
                                        className="ui-g-12 ui-sm-4 ui-md-4 sm-left-right-no-padding md-left-right-no-padding snipcss0-6-50-60"
                                    >
                                        <p-radiobutton
                                            _ngcontent-c3=""
                                            inputid="opt2"
                                            label="Standard"
                                            name="livingroompackage"
                                            value="Option 2"
                                            ng-reflect-value="Option 2"
                                            ng-reflect-name="livingroompackage"
                                            ng-reflect-label="Standard"
                                            ng-reflect-input-id="opt2"
                                            className="ng-valid ng-dirty ng-touched snipcss0-7-60-61"
                                            ng-reflect-model="Option 3"
                                        >
                                            <div
                                                className="ui-radiobutton ui-widget snipcss0-8-61-62"
                                                ng-reflect-ng-class="ui-radiobutton ui-widget"
                                            >
                                                <div className="ui-helper-hidden-accessible snipcss0-9-62-63">
                                                    <input
                                                        type="radio"
                                                        id="opt2"
                                                        name="livingroompackage"
                                                        defaultValue="Option 2"
                                                        className="snipcss0-10-63-64"
                                                    />
                                                </div>
                                                <div
                                                    className="snipcss0-9-62-65 ui-radiobutton-box ui-widget ui-state-default"
                                                    ng-reflect-ng-class="[object Object]"
                                                >
                                                    <span
                                                        className="ui-radiobutton-icon ui-clickable snipcss0-10-65-66"
                                                        ng-reflect-klass="ui-radiobutton-icon ui-clickab"
                                                        ng-reflect-ng-class="[object Object]"
                                                    ></span>
                                                </div>
                                            </div>
                                            <label
                                                className="ng-star-inserted snipcss0-8-61-67 ui-radiobutton-label"
                                                ng-reflect-ng-class="[object Object]"
                                                htmlFor="opt2"
                                            >
                                                Standard
                                            </label>
                                        </p-radiobutton>
                                    </div>
                                    <div
                                        _ngcontent-c3=""
                                        className="ui-g-12 ui-sm-4 ui-md-4 sm-left-right-no-padding md-left-right-no-padding snipcss0-6-50-68"
                                    >
                                        <p-radiobutton
                                            _ngcontent-c3=""
                                            inputid="opt3"
                                            label="Lavish"
                                            name="livingroompackage"
                                            value="Option 3"
                                            ng-reflect-value="Option 3"
                                            ng-reflect-name="livingroompackage"
                                            ng-reflect-label="Lavish"
                                            ng-reflect-input-id="opt3"
                                            className="ng-valid ng-dirty ng-touched snipcss0-7-68-69"
                                            ng-reflect-model="Option 3"
                                        >
                                            <div
                                                className="ui-radiobutton ui-widget snipcss0-8-69-70"
                                                ng-reflect-ng-class="ui-radiobutton ui-widget"
                                            >
                                                <div className="ui-helper-hidden-accessible snipcss0-9-70-71">
                                                    <input
                                                        type="radio"
                                                        id="opt3"
                                                        name="livingroompackage"
                                                        defaultValue="Option 3"
                                                        className="snipcss0-10-71-72"
                                                    />
                                                </div>
                                                <div
                                                    className="snipcss0-9-70-73 ui-radiobutton-box ui-widget ui-state-default ui-state-active"
                                                    ng-reflect-ng-class="[object Object]"
                                                >
                                                    <span
                                                        className="ui-radiobutton-icon ui-clickable snipcss0-10-73-74 pi pi-circle-on"
                                                        ng-reflect-klass="ui-radiobutton-icon ui-clickab"
                                                        ng-reflect-ng-class="[object Object]"
                                                    ></span>
                                                </div>
                                            </div>
                                            <label
                                                className="ng-star-inserted snipcss0-8-69-75 ui-radiobutton-label ui-label-active"
                                                ng-reflect-ng-class="[object Object]"
                                                htmlFor="opt3"
                                            >
                                                Lavish
                                            </label>
                                        </p-radiobutton>
                                    </div>
                                </div>
                                <app-livingroom
                                    _ngcontent-c3=""
                                    _nghost-c4=""
                                    ng-reflect-ng-class="[object Object]"
                                    ng-reflect-living-room-selected-for-final-estimation="false"
                                    ng-reflect-living-room-carpet-area={-259}
                                    className="ng-star-inserted"
                                >
                                    <div
                                        _ngcontent-c4=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-flooring
                                            _ngcontent-c4=""
                                            _nghost-c10=""
                                            ng-reflect-flooring="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c10=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c10=""
                                                    binary="true"
                                                    label="Flooring"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Flooring"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Flooring
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c10=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c10=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10 text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c10="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c10=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/vitrified.png"
                                                            />
                                                            <p _ngcontent-c10="">Vitrified Tiles</p>
                                                        </div>
                                                        <div _ngcontent-c10="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c10=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/wooden.png"
                                                            />
                                                            <p _ngcontent-c10="">Wooden Flooring</p>
                                                        </div>
                                                        <div _ngcontent-c10="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c10=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/italian.png"
                                                            />
                                                            <p _ngcontent-c10="">Italian Marble</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-flooring>
                                    </div>
                                    <div
                                        _ngcontent-c4=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-walls
                                            _ngcontent-c4=""
                                            _nghost-c11=""
                                            ng-reflect-wall-treatment="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c11=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c11=""
                                                    binary="true"
                                                    label="Walls"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Walls"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Walls
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c11=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c11=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c11="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c11=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/painting.png"
                                                            />
                                                            <p _ngcontent-c11="">Painting</p>
                                                        </div>
                                                        <div _ngcontent-c11="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c11=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/paintingandwallputty.png"
                                                            />
                                                            <p _ngcontent-c11="">Painting &amp; Wall Putty</p>
                                                        </div>
                                                        <div _ngcontent-c11="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c11=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/paintingwallputtywallpaper.png"
                                                            />
                                                            <p _ngcontent-c11="">
                                                                Painting ,Wall Putty &amp; Wallpaper
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-walls>
                                    </div>
                                    <div
                                        _ngcontent-c4=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-ceiling
                                            _ngcontent-c4=""
                                            _nghost-c12=""
                                            ng-reflect-ceiling="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c12=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c12=""
                                                    binary="true"
                                                    label="Ceiling"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Ceiling"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Ceiling
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c12=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c12=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c12="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c12=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/ceiling/painting.png"
                                                            />
                                                            <p _ngcontent-c12="">Painting</p>
                                                        </div>
                                                        <div _ngcontent-c12="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c12=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/ceiling/falseceiling.png"
                                                            />
                                                            <p _ngcontent-c12="">Painting &amp; False Ceiling</p>
                                                        </div>
                                                        <div _ngcontent-c12="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c12=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/ceiling/designerfalseceiling.png"
                                                            />
                                                            <p _ngcontent-c12="">
                                                                Designer False Ceiling and Painting
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-ceiling>
                                    </div>
                                    <div
                                        _ngcontent-c4=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-electricals
                                            _ngcontent-c4=""
                                            _nghost-c13=""
                                            ng-reflect-electricals="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c13=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c13=""
                                                    binary="true"
                                                    label="Electricals"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Electricals"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Electricals
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c13=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c13=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10 text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c13="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c13=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/electricals/relocation.png"
                                                            />
                                                            <p _ngcontent-c13="">Relocation of Existing Switches</p>
                                                        </div>
                                                        <div _ngcontent-c13="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c13=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/electricals/newwiring.png"
                                                            />
                                                            <p _ngcontent-c13="">New Wiring and Switches</p>
                                                        </div>
                                                        <div _ngcontent-c13="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c13=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/electricals/automation.png"
                                                            />
                                                            <p _ngcontent-c13="">
                                                                New Wire and Switches with Automation
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-electricals>
                                    </div>
                                    <div
                                        _ngcontent-c4=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-windowtreatment
                                            _ngcontent-c4=""
                                            _nghost-c14=""
                                            ng-reflect-window-treatment="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c14=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c14=""
                                                    binary="true"
                                                    label="Windows"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Windows"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Windows
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c14=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c14=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c14="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c14=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/windows/standard.png"
                                                            />
                                                            <p _ngcontent-c14="">Standard Power Coated MS Section</p>
                                                        </div>
                                                        <div _ngcontent-c14="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c14=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/windows/anodised.png"
                                                            />
                                                            <p _ngcontent-c14="">
                                                                Anodised Aluminum Section with Granite Framing
                                                            </p>
                                                        </div>
                                                        <div _ngcontent-c14="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c14=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/windows/soundproof.png"
                                                            />
                                                            <p _ngcontent-c14="">
                                                                Sound Proof Window Section with Granite Framing
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-windowtreatment>
                                    </div>
                                    <div
                                        _ngcontent-c4=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-doortreatment
                                            _ngcontent-c4=""
                                            _nghost-c15=""
                                            ng-reflect-door-treatment="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c15=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c15=""
                                                    binary="true"
                                                    label="Doors"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Doors"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Doors
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c15=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c15=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c15="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c15=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/doors/polish.png"
                                                            />
                                                            <p _ngcontent-c15="">
                                                                Door Frame Polishing and Door Edge Cleaning
                                                            </p>
                                                        </div>
                                                        <div _ngcontent-c15="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c15=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/doors/polishnew.png"
                                                            />
                                                            <p _ngcontent-c15="">
                                                                Door Frame Polish and New Door with New Handle/Hardware
                                                            </p>
                                                        </div>
                                                        <div _ngcontent-c15="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c15=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/doors/newdoor.png"
                                                            />
                                                            <p _ngcontent-c15="">
                                                                New Door Frame and Door with Veneer Matt/ PU Finish with
                                                                New Handle Hardware
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-doortreatment>
                                    </div>
                                    <div
                                        _ngcontent-c4=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-carpentryworks
                                            _ngcontent-c4=""
                                            _nghost-c16=""
                                            ng-reflect-carpentry-works="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c16=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c16=""
                                                    binary="true"
                                                    label="Furniture"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Furniture"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Furniture
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c16=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c16=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/furniture/tvunit.png"
                                                            />
                                                            <p _ngcontent-c16="">TV Unit</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/furniture/entconsole.png"
                                                            />
                                                            <p _ngcontent-c16="">Ent. Console</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/furniture/bar.png"
                                                            />
                                                            <p _ngcontent-c16="">Bar Counter</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/furniture/crockery.png"
                                                            />
                                                            <p _ngcontent-c16="">Crockery Unit</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/furniture/shoerack.png"
                                                            />
                                                            <p _ngcontent-c16="">Shoe Rack</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/furniture/outdoorpanel.png"
                                                            />
                                                            <p _ngcontent-c16="">Outdoor Paneling</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/furniture/safetydoor.png"
                                                            />
                                                            <p _ngcontent-c16="">Safety Door</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/furniture/mandirunit.jpg"
                                                            />
                                                            <p _ngcontent-c16="">Mandir Unit</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-carpentryworks>
                                    </div>
                                </app-livingroom>
                                <app-masterbathroom
                                    _ngcontent-c3=""
                                    _nghost-c6=""
                                    ng-reflect-ng-class="[object Object]"
                                    ng-reflect-master-bathroom-selected-for-final-estimation="false"
                                    className="ng-star-inserted hideSection"
                                >
                                    <div
                                        _ngcontent-c6=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-flooring
                                            _ngcontent-c6=""
                                            _nghost-c10=""
                                            ng-reflect-flooring="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c10=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c10=""
                                                    binary="true"
                                                    label="Flooring"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Flooring"
                                                    ng-reflect-model="false"
                                                    className="ng-valid ng-dirty ng-touched"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                                className=""
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Flooring
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c10=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c10=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10 text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c10="" className="ui-g-4 ng-star-inserted">
                                                            <i
                                                                _ngcontent-c10=""
                                                                className="fa fa-check right-tick-icon ng-star-inserted"
                                                            ></i>
                                                            <img
                                                                _ngcontent-c10=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/flooring/vitrified.png"
                                                            />
                                                            <p _ngcontent-c10="">Vitrified Tiles</p>
                                                        </div>
                                                        <div _ngcontent-c10="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c10=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/flooring/deckwood.png"
                                                            />
                                                            <p _ngcontent-c10="">Deckwood Flooring</p>
                                                        </div>
                                                        <div _ngcontent-c10="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c10=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/flooring/italian.png"
                                                            />
                                                            <p _ngcontent-c10="">Italian Marble</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-flooring>
                                    </div>
                                    <div
                                        _ngcontent-c6=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-walls
                                            _ngcontent-c6=""
                                            _nghost-c11=""
                                            ng-reflect-wall-treatment="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c11=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c11=""
                                                    binary="true"
                                                    label="Walls"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Walls"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Walls
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c11=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c11=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c11="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c11=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/walls/painting.png"
                                                            />
                                                            <p _ngcontent-c11="">Painting</p>
                                                        </div>
                                                        <div _ngcontent-c11="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c11=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/walls/walltiling.png"
                                                            />
                                                            <p _ngcontent-c11="">Full wall Tiling</p>
                                                        </div>
                                                        <div _ngcontent-c11="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c11=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/walls/italianmarble.png"
                                                            />
                                                            <p _ngcontent-c11="">Italian Marble</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-walls>
                                    </div>
                                    <div
                                        _ngcontent-c6=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-ceiling
                                            _ngcontent-c6=""
                                            _nghost-c12=""
                                            ng-reflect-ceiling="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c12=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c12=""
                                                    binary="true"
                                                    label="Ceiling"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Ceiling"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Ceiling
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c12=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c12=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c12="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c12=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/ceiling/painting.png"
                                                            />
                                                            <p _ngcontent-c12="">Painting</p>
                                                        </div>
                                                        <div _ngcontent-c12="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c12=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/ceiling/ceiling.png"
                                                            />
                                                            <p _ngcontent-c12="">
                                                                Painting &amp; Water Resistant Ceiling
                                                            </p>
                                                        </div>
                                                        <div _ngcontent-c12="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c12=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/ceiling/metallicceiling.png"
                                                            />
                                                            <p _ngcontent-c12="">Water Proof Metallic Ceiling</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-ceiling>
                                    </div>
                                    <div
                                        _ngcontent-c6=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-electricals
                                            _ngcontent-c6=""
                                            _nghost-c13=""
                                            ng-reflect-electricals="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c13=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c13=""
                                                    binary="true"
                                                    label="Electricals"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Electricals"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Electricals
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c13=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c13=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10 text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c13="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c13=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/electricals/relocation.png"
                                                            />
                                                            <p _ngcontent-c13="">Relocation of Existing Switches</p>
                                                        </div>
                                                        <div _ngcontent-c13="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c13=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/electricals/newwiring.png"
                                                            />
                                                            <p _ngcontent-c13="">New Wiring and Switches</p>
                                                        </div>
                                                        <div _ngcontent-c13="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c13=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/electricals/automation.png"
                                                            />
                                                            <p _ngcontent-c13="">
                                                                New Wire and Switches with Automation
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-electricals>
                                    </div>
                                    <div
                                        _ngcontent-c6=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-windowtreatment
                                            _ngcontent-c6=""
                                            _nghost-c14=""
                                            ng-reflect-window-treatment="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c14=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c14=""
                                                    binary="true"
                                                    label="Windows"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Windows"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Windows
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c14=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c14=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c14="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c14=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/windows/standard.png"
                                                            />
                                                            <p _ngcontent-c14="">Standard Power Coated MS Section</p>
                                                        </div>
                                                        <div _ngcontent-c14="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c14=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/windows/anodised.png"
                                                            />
                                                            <p _ngcontent-c14="">
                                                                Anodised Aluminum Section with Granite Framing
                                                            </p>
                                                        </div>
                                                        <div _ngcontent-c14="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c14=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/windows/soundproof.png"
                                                            />
                                                            <p _ngcontent-c14="">
                                                                Sound Proof Window Section with Granite Framing
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-windowtreatment>
                                    </div>
                                    <div
                                        _ngcontent-c6=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-doortreatment
                                            _ngcontent-c6=""
                                            _nghost-c15=""
                                            ng-reflect-door-treatment="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c15=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c15=""
                                                    binary="true"
                                                    label="Doors"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Doors"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Doors
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c15=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c15=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c15="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c15=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/doors/polish.png"
                                                            />
                                                            <p _ngcontent-c15="">
                                                                Door Frame Polishing and Door Edge Cleaning
                                                            </p>
                                                        </div>
                                                        <div _ngcontent-c15="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c15=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/doors/polishnew.png"
                                                            />
                                                            <p _ngcontent-c15="">
                                                                Door Frame Polish and New Door with New Handle/Hardware
                                                            </p>
                                                        </div>
                                                        <div _ngcontent-c15="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c15=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/doors/newdoor.png"
                                                            />
                                                            <p _ngcontent-c15="">
                                                                New Door Frame and Door with Veneer Matt/ PU Finish with
                                                                New Handle Hardware
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-doortreatment>
                                    </div>
                                    <div
                                        _ngcontent-c6=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-plumbing
                                            _ngcontent-c6=""
                                            _nghost-c17=""
                                            ng-reflect-plumbing="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c17=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c17=""
                                                    binary="true"
                                                    label="Plumbing"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Plumbing"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Plumbing
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c17=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c17=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c17="" className="ui-g-4 ng-star-inserted">
                                                            <p-checkbox
                                                                _ngcontent-c17=""
                                                                inputid="ny"
                                                                name="group1"
                                                                value="New York"
                                                                ng-reflect-value="New York"
                                                                ng-reflect-name="group1"
                                                                ng-reflect-input-id="ny"
                                                            >
                                                                <div
                                                                    className="ui-chkbox ui-widget"
                                                                    ng-reflect-ng-class="ui-chkbox ui-widget"
                                                                >
                                                                    <div className="ui-helper-hidden-accessible">
                                                                        <input
                                                                            type="checkbox"
                                                                            ng-reflect-ng-class="[object Object]"
                                                                            id="ny"
                                                                            name="group1"
                                                                            defaultValue="New York"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                                        ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                                        ng-reflect-ng-class="[object Object]"
                                                                    >
                                                                        <span
                                                                            className="ui-chkbox-icon ui-clickable"
                                                                            ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                                        ></span>
                                                                    </div>
                                                                </div>
                                                            </p-checkbox>
                                                            <p _ngcontent-c17="">Water Closet(WC)</p>
                                                        </div>
                                                        <div _ngcontent-c17="" className="ui-g-4 ng-star-inserted">
                                                            <p-checkbox
                                                                _ngcontent-c17=""
                                                                inputid="ny"
                                                                name="group1"
                                                                value="New York"
                                                                ng-reflect-value="New York"
                                                                ng-reflect-name="group1"
                                                                ng-reflect-input-id="ny"
                                                            >
                                                                <div
                                                                    className="ui-chkbox ui-widget"
                                                                    ng-reflect-ng-class="ui-chkbox ui-widget"
                                                                >
                                                                    <div className="ui-helper-hidden-accessible">
                                                                        <input
                                                                            type="checkbox"
                                                                            ng-reflect-ng-class="[object Object]"
                                                                            id="ny"
                                                                            name="group1"
                                                                            defaultValue="New York"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                                        ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                                        ng-reflect-ng-class="[object Object]"
                                                                    >
                                                                        <span
                                                                            className="ui-chkbox-icon ui-clickable"
                                                                            ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                                        ></span>
                                                                    </div>
                                                                </div>
                                                            </p-checkbox>
                                                            <p _ngcontent-c17="">Washbasin and Mixer</p>
                                                        </div>
                                                        <div _ngcontent-c17="" className="ui-g-4 ng-star-inserted">
                                                            <p-checkbox
                                                                _ngcontent-c17=""
                                                                inputid="ny"
                                                                name="group1"
                                                                value="New York"
                                                                ng-reflect-value="New York"
                                                                ng-reflect-name="group1"
                                                                ng-reflect-input-id="ny"
                                                            >
                                                                <div
                                                                    className="ui-chkbox ui-widget"
                                                                    ng-reflect-ng-class="ui-chkbox ui-widget"
                                                                >
                                                                    <div className="ui-helper-hidden-accessible">
                                                                        <input
                                                                            type="checkbox"
                                                                            ng-reflect-ng-class="[object Object]"
                                                                            id="ny"
                                                                            name="group1"
                                                                            defaultValue="New York"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                                        ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                                        ng-reflect-ng-class="[object Object]"
                                                                    >
                                                                        <span
                                                                            className="ui-chkbox-icon ui-clickable"
                                                                            ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                                        ></span>
                                                                    </div>
                                                                </div>
                                                            </p-checkbox>
                                                            <p _ngcontent-c17="">Shower and Diverter</p>
                                                        </div>
                                                        <div _ngcontent-c17="" className="ui-g-4 ng-star-inserted">
                                                            <p-checkbox
                                                                _ngcontent-c17=""
                                                                inputid="ny"
                                                                name="group1"
                                                                value="New York"
                                                                ng-reflect-value="New York"
                                                                ng-reflect-name="group1"
                                                                ng-reflect-input-id="ny"
                                                            >
                                                                <div
                                                                    className="ui-chkbox ui-widget"
                                                                    ng-reflect-ng-class="ui-chkbox ui-widget"
                                                                >
                                                                    <div className="ui-helper-hidden-accessible">
                                                                        <input
                                                                            type="checkbox"
                                                                            ng-reflect-ng-class="[object Object]"
                                                                            id="ny"
                                                                            name="group1"
                                                                            defaultValue="New York"
                                                                        />
                                                                    </div>
                                                                    <div
                                                                        className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                                        ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                                        ng-reflect-ng-class="[object Object]"
                                                                    >
                                                                        <span
                                                                            className="ui-chkbox-icon ui-clickable"
                                                                            ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                                        ></span>
                                                                    </div>
                                                                </div>
                                                            </p-checkbox>
                                                            <p _ngcontent-c17="">Geyser</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-plumbing>
                                    </div>
                                    <div
                                        _ngcontent-c6=""
                                        className="ui-g-12 ui-md-12 product-type-section"
                                    >
                                        <app-carpentryworks
                                            _ngcontent-c6=""
                                            _nghost-c16=""
                                            ng-reflect-carpentry-works="[object Object]"
                                        >
                                            <div
                                                _ngcontent-c16=""
                                                className="ui-g-12 ui-md-12 text-left light-margin less-padding-top-bottom"
                                            >
                                                <p-checkbox
                                                    _ngcontent-c16=""
                                                    binary="true"
                                                    label="Furniture"
                                                    ng-reflect-binary="true"
                                                    ng-reflect-label="Furniture"
                                                    ng-reflect-model="false"
                                                    className="ng-untouched ng-pristine ng-valid"
                                                >
                                                    <div
                                                        className="ui-chkbox ui-widget"
                                                        ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    >
                                                        <div className="ui-helper-hidden-accessible">
                                                            <input
                                                                type="checkbox"
                                                                ng-reflect-ng-class="[object Object]"
                                                                name="undefined"
                                                                defaultValue="undefined"
                                                            />
                                                        </div>
                                                        <div
                                                            className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                            ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                            ng-reflect-ng-class="[object Object]"
                                                        >
                                                            <span
                                                                className="ui-chkbox-icon ui-clickable"
                                                                ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                            ></span>
                                                        </div>
                                                    </div>
                                                    <label
                                                        className="ng-star-inserted ui-chkbox-label"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        Furniture
                                                    </label>
                                                </p-checkbox>
                                                <div
                                                    _ngcontent-c16=""
                                                    className="ui-g-12 ui-md-12 hide-display"
                                                    ng-reflect-klass="ui-g-12 ui-md-12"
                                                    ng-reflect-ng-class="hide-display"
                                                >
                                                    <div
                                                        _ngcontent-c16=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/furniture/mirror.png"
                                                            />
                                                            <p _ngcontent-c16="">Mirror</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/furniture/ledge.png"
                                                            />
                                                            <p _ngcontent-c16="">Designer Ledge</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/furniture/cabinet.jpg"
                                                            />
                                                            <p _ngcontent-c16="">Undercounter Cabinet</p>
                                                        </div>
                                                        <div _ngcontent-c16="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c16=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/bathroom/furniture/shower.jpg"
                                                            />
                                                            <p _ngcontent-c16="">Shower Partition</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </app-carpentryworks>
                                    </div>
                                </app-masterbathroom>
                            </div>
                            <div
                                _ngcontent-c3=""
                                className="ui-g-12 snipcss0-4-48-239"
                                style={{ paddingTop: 0 }}
                            >
                                <div
                                    _ngcontent-c3=""
                                    className="ui-g-8 ui-g-offset-2 ui-sm-12 ui-sm-offset-0 top-padding snipcss0-5-239-240"
                                >
                                    <div
                                        _ngcontent-c3=""
                                        className="ui-g-6 ui-g-offset-3 ui-sm-8 ui-sm-offset-2 top-padding snipcss0-6-240-241"
                                    >
                                        <button
                                            _ngcontent-c3=""
                                            className="ui-button-raised ui-button-rounded theme-button hide-button-overflow-text snipcss0-7-241-242"
                                            id="next-room-button"
                                            type="button"
                                        >
                                            Next Room&gt;
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                :
                <div className='text-center'>
                  {<Contact />}
               </div>

              
}
                
            
        </div>

    )
}
