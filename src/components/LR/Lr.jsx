import React from 'react'
import './Lr.css'
import { useSelector, useDispatch } from "react-redux";
import {incNumber1} from "../../redux/action";
import {incNumber2} from "../../redux/action";
import {incNumber3} from "../../redux/action";
// import { ToggleSwitch } from '../../../toggle-switch/toggleSwitch';
//  import {Number} from "./actions";
import { useState } from 'react'
export const Lr = () => {


    // const changeTheNumber = useSelector((state)=>state.changeTheNumber);
    const dispatch = useDispatch();


    const [checkbox, setCheckbox] = useState(false)
    const [activ, setActiv] = useState(true)

    const fun1 = () => {
        setCheckbox(!checkbox);
    };
    const fun2 = () => {
        setActiv(!activ);
    };

    const [isChecked, setIsChecked] = useState(false);
    const [iswall, setwall] = useState(false);
    const [isceil, setceil] = useState(false);
    const [isElectricals, setElectricals] = useState(false);
    const [isWindows, setWindows] = useState(false);

    const [isDoors, setDoors] = useState(false);
    const [isFurniture, setFurniture] = useState(false);


    // const [isFlooringOn, setIsFlooringOn] = useState([])
    // const [gender, setGender] = useState();
    return (
        <>

            <div
                _ngcontent-c3=""
                className="ui-g-12 ui-md-6 no-padding-top-bottom sm-left-right-no-padding "
                id="room-product-details"
            >
                <div _ngcontent-c3="" className="ui-g-12 white-background">
                    <div _ngcontent-c3="" className="ui-g-12 top-padding">


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
                                {/* <div
                                    className="ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-active"
                                    ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                    ng-reflect-ng-class="[object Object]"
                                >
                                    <span
                                        className="ui-chkbox-icon ui-clickable pi pi-check"
                                        ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                        ng-reflect-ng-class="pi pi-check"
                                    ></span>
                                </div> */}
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
                        className="ui-g-12 ui-md-12 ui-md-offset-0 "
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
                                            Lavish
                                        </label>
                                    </p-radiobutton>
                                </div>



                            </div>


                            {/* <app-livingroom
                                _ngcontent-c3=""
                                _nghost-c4=""
                                ng-reflect-ng-class="[object Object]"
                                ng-reflect-living-room-selected-for-final-estimation="false"
                                ng-reflect-living-room-carpet-area={-259}
                                className="ng-star-inserted"
                            > */}
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
                                            {/*                                                 

                  <FormControl fullWidth margin='normal'>
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup row name="gender" aria-labelledby="gender-radio">
                <FormControlLabel value="male" control={<Radio />} label='Male' onChange={(e) => setGender(e.target.value)} />
                <FormControlLabel value="female" control={<Radio />} label='Female' onChange={(e) => setGender(e.target.value)} />
                <FormControlLabel value="other" control={<Radio />} label='Other' onChange={(e) => setGender(e.target.value)} />
              </RadioGroup>
            </FormControl>

                             */}
                                            {/* <div
                                                 
                                                    className="ui-chkbox ui-widget"
                                                    ng-reflect-ng-class="ui-chkbox ui-widget"
                                                    
                                                >
                                                    <div className="ui-helper-hidden-accessible">
                                                    
                                                        <input
                                                            type="checkbox"
                                                            ng-reflect-ng-class="[object Object]"
                                                            name="undefined"
                                                            defaultValue="false"
                                                            value={isFlooringOn}
                                                            onChange={(e)=>setIsFlooringOn(e.target.value)}
                                                        />
                                                        Hello there 0p
                                                        ]
                                                        <input
                                                            type="checkbox"
                                                            // ng-reflect-ng-class="[object Object]"
                                                            // name="thilsone"
                                                            // defaultValue="false"
                                                            // value={isFlooringOn}
                                                            // onChange={(e)=>setIsFlooringOn(e.target.value)}
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
                                                </div> */}


                                            {/* <div>
                                                    <h1>
                                                        {gender}
                                                    </h1>


                                                  
                                                    
                                                </div>                                             
                                                    className="ng-star-inserted ui-chkbox-label"
                                                    ng-reflect-ng-class="[object Object]"
                                                > */}
                                            {/* <input type="checkbox" name="checkbox" value="setcheckbox" onChange={handleClick()} />Flooring */}
                                            {/* <input type="radio" name="gender" value="Male"  onClick={handleClick} /><p>  Flooring</p> */}

                                            {/* <label

                                               style={{ position:'realtive',
                                                float:  "left"}} 
                                                >
                                                    
                                                </label> */}

                                        </p-checkbox>




                                        <label class="ng-star-inserted ui-chkbox-label" ng-reflect-ng-class="[object Object]">Flooring</label>
                                        <label for="flooring" style={{
                                            position: 'realtive',
                                            float: "left"
                                        }}  >

                                            <input
                                                type="checkbox"

                                                id="flooring"
                                                onChange={() => {
                                                    setIsChecked(!isChecked);
                                                }}
                                            />

                                        </label>




                                        <div
                                        // _ngcontent-c10=""
                                        // className="ui-g-12 ui-md-12 hide-display"
                                        // ng-reflect-klass="ui-g-12 ui-md-12"
                                        // ng-reflect-ng-class="hide-display"
                                        >

                                            {isChecked ?
                                                <>
                                                    <div
                                                        _ngcontent-c10=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10 text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c10="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c10=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/vitrified.png"
                                                           
                                                           onClick={()=>dispatch(incNumber1(23450))}
                                                           
                                                           />
                                                            <p _ngcontent-c10="">Vitrified Tiles</p>
                                                        </div>
                                                        <div _ngcontent-c10="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c10=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/wooden.png" 
                                                                
                                                                 onClick={()=>dispatch(incNumber1(-45670))}
                                                                
                                                            />
                                                            <p _ngcontent-c10="">Wooden Flooring</p>
                                                        </div>
                                                        <div _ngcontent-c10="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c10=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/flooring/italian.png"
                                                             onClick={()=>dispatch(incNumber1(-46899))}
                                                            />
                                                            <p _ngcontent-c10="">Italian Marble</p>
                                                        </div>

                                                    </div>
                                                </>
                                                : "  "
                                            }
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
                                                    {/* <input
                                                            type="checkbox"
                                                            ng-reflect-ng-class="[object Object]"
                                                            name="undefined"
                                                            defaultValue="undefined"
                                                        /> */}


                                                    {/* 
                                                     <input
                                                    type="checkbox"
                                                
                                                    onChange={() => {
                                                        setwall(!iswall);
                                                    }}
                                                /> */}


                                                </div>

                                                {/*                                                     
                                                    <div
                                                        className="ui-chkbox-box ui-widget ui-corner-all ui-state-default"
                                                        ng-reflect-klass="ui-chkbox-box ui-widget ui-cor"
                                                        ng-reflect-ng-class="[object Object]"
                                                    >
                                                        <span
                                                            className="ui-chkbox-icon ui-clickable"
                                                            ng-reflect-klass="ui-chkbox-icon ui-clickable"
                                                        ></span>
                                                    </div> */}
                                            </div>


                                            {/* <label
                                                    // className="ng-star-inserted ui-chkbox-label"
                                                    // ng-reflect-ng-class="[object Object]"
                                                >
                                                    Walls
                                                </label> */}

                                        </p-checkbox>



                                        <label class="ng-star-inserted ui-chkbox-label" ng-reflect-ng-class="[object Object]">walls</label>
                                        <label for="wall"

                                            style={{
                                                position: 'realtive',
                                                float: "left"
                                            }}

                                        >


                                            <input
                                                type="checkbox"

                                                id="wall"
                                                onChange={() => {
                                                    setwall(!iswall);
                                                }}
                                            />


                                        </label>
                                        <div
                                        // _ngcontent-c11=""
                                        // className="ui-g-12 ui-md-12 hide-display"
                                        // ng-reflect-klass="ui-g-12 ui-md-12"
                                        // ng-reflect-ng-class="hide-display"
                                        >









                                            {iswall ?
                                                <>
                                                    <div
                                                        _ngcontent-c11=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c11="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c11=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/painting.png"  onClick={()=>dispatch(incNumber1(23450))}
                                                            />
                                                            <p _ngcontent-c11="">Painting</p>
                                                        </div>
                                                        <div _ngcontent-c11="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c11=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/paintingandwallputty.png"  onClick={()=>dispatch(incNumber1(23450))}
                                                            />
                                                            <p _ngcontent-c11="">Painting &amp; Wall Putty</p>
                                                        </div>
                                                        <div _ngcontent-c11="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c11=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/walltreatment/paintingwallputtywallpaper.png" onClick={()=>dispatch(incNumber1(23450))}
                                                            />
                                                            <p _ngcontent-c11="">
                                                                Painting ,Wall Putty &amp; Wallpaper
                                                            </p>
                                                        </div>
                                                    </div>
                                                </>
                                                : ""

                                            }
                                        </div>

                                    </div>
                                </app-walls>
                            </div>

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
                                    {/* <p-checkbox
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
 */}


                                    <label class="ng-star-inserted ui-chkbox-label" ng-reflect-ng-class="[object Object]">Ceiling</label>
                                    <label for="Ceiling" style={{
                                        position: 'realtive',
                                        float: "left"
                                    }}  >

                                        <input
                                            type="checkbox"

                                            id="Ceiling"
                                            onChange={() => {
                                                setceil(!isceil);
                                            }}
                                        />

                                    </label>


                                    <div


                                    // _ngcontent-c12=""
                                    // className="ui-g-12 ui-md-12 hide-display"
                                    // ng-reflect-klass="ui-g-12 ui-md-12"
                                    // ng-reflect-ng-class="hide-display"
                                    >

                                        {isceil ?
                                            <>
                                                <div
                                                    _ngcontent-c12=""
                                                    className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                >
                                                    <div _ngcontent-c12="" className="ui-g-4 ng-star-inserted">
                                                        <img
                                                            _ngcontent-c12=""
                                                            className="product-images img-responsive"
                                                            src="http://costfinder.consdeployer.com/assets/productselection/livingroom/ceiling/painting.png"
                                                            onClick={()=>dispatch(incNumber1(23450))}
                                                        />
                                                        <p _ngcontent-c12="">Painting</p>
                                                    </div>
                                                    <div _ngcontent-c12="" className="ui-g-4 ng-star-inserted">
                                                        <img
                                                            _ngcontent-c12=""
                                                            className="product-images img-responsive"
                                                            src="http://costfinder.consdeployer.com/assets/productselection/livingroom/ceiling/falseceiling.png"
                                                            onClick={()=>dispatch(incNumber1(23450))}
                                                        />
                                                        <p _ngcontent-c12="">Painting &amp; False Ceiling</p>
                                                    </div>
                                                    <div _ngcontent-c12="" className="ui-g-4 ng-star-inserted">
                                                        <img
                                                            _ngcontent-c12=""
                                                            className="product-images img-responsive"
                                                            src="http://costfinder.consdeployer.com/assets/productselection/livingroom/ceiling/designerfalseceiling.png" onClick={()=>dispatch(incNumber1(23450))}
                                                        />
                                                        <p _ngcontent-c12="">
                                                            Designer False Ceiling and Painting
                                                        </p>
                                                    </div>
                                                </div>

                                            </>
                                            : " "
                                        }


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
                                    {/* <p-checkbox
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
                                    </p-checkbox> */}





                                    <label class="ng-star-inserted ui-chkbox-label" ng-reflect-ng-class="[object Object]">Electricals</label>
                                    <label for="Electricals" style={{
                                        position: 'realtive',
                                        float: "left"
                                    }}  >

                                        <input
                                            type="checkbox"

                                            id="Electricals"
                                            onChange={() => {
                                                setElectricals(!isElectricals);
                                            }}
                                        />

                                    </label>





                                    <div
                                    // _ngcontent-c13=""
                                    // className="ui-g-12 ui-md-12 hide-display"
                                    // ng-reflect-klass="ui-g-12 ui-md-12"
                                    // ng-reflect-ng-class="hide-display"
                                    >




                                        {
                                            isElectricals ?
                                                <>
                                                    <div
                                                        _ngcontent-c13=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10 text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c13="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c13=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/electricals/relocation.png" onClick={()=>dispatch(incNumber1(23450))}
                                                            />
                                                            <p _ngcontent-c13="">Relocation of Existing Switches</p>
                                                        </div>
                                                        <div _ngcontent-c13="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c13=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/electricals/newwiring.png" onClick={()=>dispatch(incNumber1(23450))}
                                                            />
                                                            <p _ngcontent-c13="">New Wiring and Switches</p>
                                                        </div>
                                                        <div _ngcontent-c13="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c13=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/electricals/automation.png"onClick={()=>dispatch(incNumber1(23450))}
                                                            />
                                                            <p _ngcontent-c13=""> 
                                                                New Wire and Switches with Automation
                                                            </p>
                                                        </div>
                                                    </div>

                                                </>
                                                : " "
                                        }
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
                                    {/* <p-checkbox
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
                                    </p-checkbox> */}



                                    <label class="ng-star-inserted ui-chkbox-label" ng-reflect-ng-class="[object Object]">Windows</label>
                                    <label for="Electricals" style={{
                                        position: 'realtive',
                                        float: "left"
                                    }}  >

                                        <input
                                            type="checkbox"

                                            id="Electricals"
                                            onChange={() => {
                                                setWindows(!isWindows);
                                            }}
                                        />

                                    </label>

                                    <div
                                        // _ngcontent-c14=""
                                        // className="ui-g-12 ui-md-12 hide-display"
                                        // ng-reflect-klass="ui-g-12 ui-md-12"
                                        // ng-reflect-ng-class="hide-display"
                                    >

                                        {
                                            isWindows ?
                                                <>

                                                    <div
                                                        _ngcontent-c14=""
                                                        className="ui-g-12 ui-md-12 ui-lg-10  text-center no-padding-top-bottom"
                                                    >
                                                        <div _ngcontent-c14="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c14=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/windows/standard.png" onClick={()=>dispatch(incNumber1(23450))}
                                                            />
                                                            <p _ngcontent-c14="">Standard Power Coated MS Section</p>
                                                        </div>
                                                        <div _ngcontent-c14="" className="ui-g-4 ng-star-inserted">
                                                            <img
                                                                _ngcontent-c14=""
                                                                className="product-images img-responsive"
                                                                src="http://costfinder.consdeployer.com/assets/productselection/livingroom/windows/anodised.png"
                                                                onClick={()=>dispatch(incNumber1(23450))}
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
                                                                onClick={()=>dispatch(incNumber1(23450))}
                                                            />
                                                            <p _ngcontent-c14="">
                                                                Sound Proof Window Section with Granite Framing
                                                            </p>
                                                        </div>
                                                    </div>
                                                    </>
                                                    : ""
                                                
}
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
                                    {/* <p-checkbox
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
                                    </p-checkbox> */}



                              <label class="ng-star-inserted ui-chkbox-label" ng-reflect-ng-class="[object Object]">Doors</label>
                                    <label for="Electricals" style={{
                                        position: 'realtive',
                                        float: "left"
                                    }}  >

                                        <input
                                            type="checkbox"

                                            id="Electricals"
                                            onChange={() => {
                                                setDoors(!isDoors);
                                            }}
                                        />

                                    </label>



                                    <div
                                        // _ngcontent-c15=""
                                        // className="ui-g-12 ui-md-12 hide-display"
                                        // ng-reflect-klass="ui-g-12 ui-md-12"
                                        // ng-reflect-ng-class="hide-display"
                                    >




                                        {isDoors?

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
                                        :""
}
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
                                    {/* <p-checkbox
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
</p-checkbox>*/}




               <label class="ng-star-inserted ui-chkbox-label" ng-reflect-ng-class="[object Object]">Furniture</label>
                                    <label for="Electricals" style={{
                                        position: 'realtive',
                                        float: "left"
                                    }}  >

                                        <input
                                            type="checkbox"

                                            id="Electricals"
                                            onChange={() => {
                                                setFurniture(!isFurniture);
                                            }}
                                        />

                                    </label>

                                    <div
                                        // _ngcontent-c16="" 
                                        // className="ui-g-12 ui-md-12 hide-display"
                                        // ng-reflect-klass="ui-g-12 ui-md-12"
                                        // ng-reflect-ng-class="hide-display"
                                    >


                                        {isFurniture?
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

                                        : " "
}
                                    </div>
                                </div>
                            </app-carpentryworks>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
