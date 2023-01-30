import React from 'react'
import './Spacedetails.css'
// import { ToggleSwitch } from '../../../toggle-switch/toggleSwitch';
// import{Contact} from '../../../components/Contact/contact';
import { Lr } from '../../../components/LR/Lr';
import { useState } from 'react'
// import { useHistory } from "react-router-dom";


export const Spacedetails = () => {


  // const history = useHistory();

    //  const home = () => {
    //     history.push("/");
    // }
  const [tgl, settgl] = useState(true)
  const [active, setActive] = useState(false);

  const f1 = () => {
    settgl(!tgl);

  };
  const f2 = () => {
    setActive(!active);


  };




  return (
    <>


      <>
        {/* Hello world */}
        {/* <div class="awesome" style="border: 1px solid red">
  <label for="name">Enter your name: </label>
  <input type="text" id="name" />
</div>
<p>Enter your HTML he re</p> */}

        {/* 
  <div
    _ngcontent-c3=""
    className="ui-g text-center theme-background-color theme-page-start custom-top-padding no-top-padding snipcss-3ZTN2"
  >
    <app-navbar
      _ngcontent-c3=""
      className="ui-g-12 no-padding-left-right no-padding-top sm-white-background"
      _nghost-c2=""
      ng-reflect-active-index={1}
    >
      <div _ngcontent-c2="" className="ui-g-12" id="headsection">
        <h1 _ngcontent-c2="" className="white-color">
          5ELEMENTS
        </h1>
        <p _ngcontent-c2="" className="white-color snipcss0-0-0-1">
          COST FINDER
        </p>
      </div>
      <div
        _ngcontent-c2=""
        className="ui-g-12 ui-md-8 ui-md-offset-2 no-padding-top"
        id="stepssection"
      >
        <p-steps
          _ngcontent-c2=""
          styleclass="steps-custom"
          ng-reflect-active-index={1}
          ng-reflect-model="[object Object],[object Object"
          ng-reflect-style-class="steps-custom"
        >
          <div
            className="steps-custom ui-steps ui-widget ui-helper-clearfix ui-steps-readonly"
            ng-reflect-klass="steps-custom"
            ng-reflect-ng-class="[object Object]"
          >
            <ul role="tablist">
              <li
                className="ui-steps-item ui-state-default ui-state-complete ui-state-disabled ui-steps-incomplete ng-star-inserted"
                ng-reflect-ng-class="[object Object]"
              >
                <a className="ui-menuitem-link ng-star-inserted" href="#">
                  <span className="ui-steps-number">1</span>
                  <span className="ui-steps-title">Space Details</span>
                </a>
              </li>
              <li
                className="ui-steps-item ui-state-highlight ui-steps-current ng-star-inserted"
                ng-reflect-ng-class="[object Object]"
              >
                <a className="ui-menuitem-link ng-star-inserted" href="#">
                  <span className="ui-steps-number">2</span>
                  <span className="ui-steps-title">Your Needs</span>
                </a>
              </li>
              <li
                className="ui-steps-item ui-state-default ui-state-disabled ui-steps-incomplete ng-star-inserted"
                ng-reflect-ng-class="[object Object]"
              >
                <a className="ui-menuitem-link ng-star-inserted" href="#">
                  <span className="ui-steps-number">3</span>
                  <span className="ui-steps-title">Get Estimate</span>
                </a>
              </li>
            </ul>
          </div>
        </p-steps>
      </div>
    </app-navbar> */}



        <div
          _ngcontent-c3=""
          className="ui-g-12 ui-lg-10 ui-lg-offset-1 padding-top no-padding-bottom"
          id="main-page"
        >
          <div
            _ngcontent-c3=""
            className="ui-g-12 ui-md-3 white-background sm-scr-left-right-no-pa dding"
          >

            <div
              _ngcontent-c3=""
              className="ui-g-12 no-padding-top-bottom no-padding-left-right"
            >
              <div
                _ngcontent-c3=""
                className="ui-g-12 ui-sm-6 ui-md-12 less-padding-top-bottom"
              >

                <div
                  _ngcontent-c3=""
                  className="ui-g-12 ui-sm-8 ui-md-8 text-left no-padding-top-bottom  sm-left-right-no-padding"
                >
                  Living Room
                </div>




                {/* <div  className='fas fa-toggle-off'>
  <button>
style={{color:"grey",backgroundColor:"white" ,borderRadius:"0px",fontSize:"28px",border:"none"}}
onClick={handleClick}
                onCClick={handleOnclick}
                className={active ? "fas fa-toggle-off" : "fas fa-toggle-on"}
</button>
</div>

<div  className='fas fa-toggle-on'>
<button
style={{color:"green",backgroundColor:"white" ,borderRadius:"0px",fontSize:"28px",border:"none"}}>
</button>

onClick={handleClick}
                onCClick={handleOnclick}
                className={active ? "fas fa-toggle-off" : "fas fa-toggle-on"}
</div> */}


                <div className='text-center'>
                  {/* {<ToggleSwitch />} */}

                  <button

                    onClick={() => { f1(); f2(); }}
                    //  onCclick={f1}
                    // className={active ? "fas fa-toggle-off" : "fas fa-toggle-on"}>

                    class="fas fa-toggle-off" style={{ color: "grey", backgroundColor: "grey", borderRadius: "0px", fontSize: "28px", border: "none" }}

                    class="fas fa-toggle-on" style={{ color: "#59CA4E", backgroundColor: "white", borderRadius: "0px", fontSize: "28px", border: "none" }}

                    className={active ? "fas fa-toggle-on" : "fas fa-toggle-off"}>

                  </button>
                </div>


                {/* <div
                  _ngcontent-c3=""
                  className="ui-g-12 ui-sm-4 ui-md-4 text-right no-padding-top-bottom sm-left-right-no-padding"
                >
                  
                  <p-inputswitch
                    _ngcontent-c3=""
                    className="ng-valid ng-dirty ng-touched"
                    ng-reflect-model="true"
                  >
                    


                    <div
                      role="checkbox"
                      className="ui-inputswitch ui-widget"
                      ng-reflect-ng-class="[object Object]"
                      aria-checked="false"
                    >



                      <div className="ui-helper-hidden-accessible">
                        <input type="checkbox" />
                      </div>
                      <span className="ui-inputswitch-slider"></span>
                    </div>
                  </p-inputswitch>
                </div>
              </div>


              
              <div
                _ngcontent-c3=""
                className="ui-g-12 ui-sm-6 less-padding-top-bottom"
              > */}



                <div
                  _ngcontent-c3=""
                  className="ui-g-12 ui-sm-8 ui-md-8 text-left no-padding-top-bottom  sm-left-right-no-padding"
                >
                  Kitchen
                </div>
                    

                <div className='text-center'>
                  {/* {<ToggleSwitch />} */}
                  <button


class="fas fa-toggle-on" style={{ color: "grey", backgroundColor: "white", borderRadius: "0px", fontSize: "28px", border: "none" }}>


                   

                    {/* onClick={() => { f1(); f2(); }}


                    // class="fas fa-toggle-off" style={{ color: "grey", backgroundColor: "grey", borderRadius: "0px", fontSize: "28px", border: "none" }}

                    // class="fas fa-toggle-on" style={{ color: "#59CA4E", backgroundColor: "white", borderRadius: "0px", fontSize: "28px", border: "none" }}

                    // className={active ? "fas fa-toggle-on" : "fas fa-toggle-off"}>
                    {/* // onClick={handleClick}


                    // onClick={()=>{f1();f2();}}

  class="fas fa-toggle-on"  style={{color:"#59CA4E",backgroundColor:"white" ,borderRadius:"0px",fontSize:"28px",border:"none"}}
                   class={active ? "fas fa-toggle-on": "fas fa-toggle-off" }>
                                         
                          


                   class="fas fa-toggle-off"  style={{color:"grey",backgroundColor:"grey" ,borderRadius:"0px",fontSize:"28px",border:"none"}}*/}
                    
                    

 

                  </button>
                </div>


                {/* <div
                  _ngcontent-c3=""
                  className="ui-g-12 ui-sm-4 ui-md-4 text-right no-padding-top-bottom sm-left-right-no-padding"
                >
                  <p-inputswitch
                    _ngcontent-c3=""
                    className="ng-untouched ng-pristine ng-valid"
                  >
                    <div
                      role="checkbox"
                      className="ui-inputswitch ui-widget"
                      ng-reflect-ng-class="[object Object]"
                    >
                      <div className="ui-helper-hidden-accessible">
                        <input type="checkbox" />
                      </div>
                      <span className="ui-inputswitch-slider"></span>
                    </div>
                  </p-inputswitch>
                </div>
              </div>
            </div>
            <div



              _ngcontent-c3=""
              className="ui-g-12  no-padding-top-bottom no-padding-left-right"
            >
              
              <div
                _ngcontent-c3=""
                className="ui-g-12 ui-sm-6 ui-md-12 less-padding-top-bottom"
              > */}


                <div
                  _ngcontent-c3=""
                  className="ui-g-12 ui-sm-8 ui-md-8 text-left no-padding-top-bottom  sm-left-right-no-padding"
                >




                  Master Bedroom
                </div>


                <div className='text-center'>
                  {/* {<ToggleSwitch />} */}

                  <button
                    // onClick={handleClick}


                    class="fas fa-toggle-on" style={{ color: "grey", backgroundColor: "white", borderRadius: "0px", fontSize: "28px", border: "none" }}>

                  </button>
                </div>




                {/* <div
                  _ngcontent-c3=""
                  className="ui-g-12 ui-sm-4 ui-md-4 text-right no-padding-top-bottom sm-left-right-no-padding"
                >
                  <p-inputswitch
                    _ngcontent-c3=""
                    width="20px"
                    className="ng-untouched ng-pristine ng-valid"
                  >
                    <div
                      role="checkbox"
                      className="ui-inputswitch ui-widget"
                      ng-reflect-ng-class="[object Object]"
                    >
                      <div className="ui-helper-hidden-accessible">
                        <input type="checkbox" />
                      </div>
                      <span className="ui-inputswitch-slider"></span>
                    </div>
                  </p-inputswitch>
                </div>
              </div>



              <div
                _ngcontent-c3=""
                className="ui-g-12 ui-sm-6 ui-md-12 less-padding-top-bottom"
              > */}



                <div
                  _ngcontent-c3=""
                  className="ui-g-12 ui-sm-8 ui-md-8 text-left no-padding-top-bottom  sm-left-right-no-padding"
                >
                  Master Bathroom
                </div>
                <div className='text-center'>

                  <button
                    // onClick={handleClick}


                    class="fas fa-toggle-on" style={{ color: "grey", backgroundColor: "white", borderRadius: "0px", fontSize: "28px", border: "none" }}>

                  </button>
                  {/* {<ToggleSwitch />} */}
                </div>


                <div
                  _ngcontent-c3=""
                  className="ui-g-12 ui-sm-4 ui-md-4 text-right no-padding-top-bottom sm-left-right-no-padding"
                >
                  
                </div>
              </div>
            </div>



            <div _ngcontent-c3="" className="less-padding-top-bottom"></div>


          </div>






          <div>


            {tgl ?
              <div
                _ngcontent-c3=""
                className="ui-g-12 ui-md-6 no-padding-top-bottom sm-left-right-no-padding"
                id="room-product-details"
              >
                <div _ngcontent-c3="" className="ui-g-12 white-background">
                  <div
                    _ngcontent-c3=""
                    className="ui-g-12 ui-md-12 ui-md-offset-0 ng-star-inserted"
                  >



                    
                    <img
                      _ngcontent-c3=""
                      className="theme-img-responsive"
                      width="100%"
                      src="http://costfinder.consdeployer.com/assets/productselection/livingroombg.jpg"
                    />




                  </div>
                  <div _ngcontent-c3="" className="ui-g-12 top-padding">
                    <p-checkbox
                      _ngcontent-c3=""
                      binary="true"
                      ng-reflect-binary="true"
                      ng-reflect-label="Enable Living Room"
                      ng-reflect-model="false"
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
                        Enable Living Room
                      </label>
                    </p-checkbox>
                  </div>
                  <div _ngcontent-c3="" className="ui-g-12 ui-md-12 ui-md-offset-0">
                    <div _ngcontent-c3="" lass="ui-g-12 ui-md-12 ui-md-offset-0">
                      <div
                        _ngcontent-c3=""
                        className="ui-g-12 ui-md-12 text-left md-left-right-no-padding"
                      >
                        <p _ngcontent-c3="" className="no-top-bottom-margin">
                          How would you like to spend on this room?
                        </p>
                        <div
                          _ngcontent-c3=""
                          className="ui-g-12 ui-sm-4 ui-md-4 sm-left-right-no-padding md-left-right-no-padding"
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
                            className="ng-untouched ng-pristine ng-valid"
                          >
                            <div
                              className="ui-radiobutton ui-widget"
                              ng-reflect-ng-class="ui-radiobutton ui-widget"
                            >
                              <div className="ui-helper-hidden-accessible">
                                <input
                                  type="radio"
                                  id="opt1"
                                  name="livingroompackage"
                                  defaultValue="Option 1"
                                />
                              </div>
                              <div
                                className="ui-radiobutton-box ui-widget ui-state-default"
                                ng-reflect-ng-class="[object Object]"
                              >
                                <span
                                  className="ui-radiobutton-icon ui-clickable"
                                  ng-reflect-klass="ui-radiobutton-icon ui-clickab"
                                  ng-reflect-ng-class="[object Object]"
                                ></span>
                              </div>
                            </div>
                            <label
                              className="ui-radiobutton-label ng-star-inserted"
                              ng-reflect-ng-class="[object Object]"
                              htmlFor="opt1"
                            >
                              Basic
                            </label>
                          </p-radiobutton>
                        </div>
                        <div
                          _ngcontent-c3=""
                          className="ui-g-12 ui-sm-4 ui-md-4 sm-left-right-no-padding md-left-right-no-padding"
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
                            className="ng-untouched ng-pristine ng-valid"
                          >
                            <div
                              className="ui-radiobutton ui-widget"
                              ng-reflect-ng-class="ui-radiobutton ui-widget"
                            >
                              <div className="ui-helper-hidden-accessible">
                                <input
                                  type="radio"
                                  id="opt2"
                                  name="livingroompackage"
                                  defaultValue="Option 2"
                                />
                              </div>
                              <div
                                className="ui-radiobutton-box ui-widget ui-state-default"
                                ng-reflect-ng-class="[object Object]"
                              >
                                <span
                                  className="ui-radiobutton-icon ui-clickable"
                                  ng-reflect-klass="ui-radiobutton-icon ui-clickab"
                                  ng-reflect-ng-class="[object Object]"
                                ></span>
                              </div>
                            </div>
                            <label
                              className="ui-radiobutton-label ng-star-inserted"
                              ng-reflect-ng-class="[object Object]"
                              htmlFor="opt2"
                            >
                              Standard
                            </label>
                          </p-radiobutton>
                        </div>
                        <div
                          _ngcontent-c3=""
                          className="ui-g-12 ui-sm-4 ui-md-4 sm-left-right-no-padding md-left-right-no-padding"
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
                            className="ng-untouched ng-pristine ng-valid"
                          >
                            <div
                              className="ui-radiobutton ui-widget"
                              ng-reflect-ng-class="ui-radiobutton ui-widget"
                            >
                              <div className="ui-helper-hidden-accessible">
                                <input
                                  type="radio"
                                  id="opt3"
                                  name="livingroompackage"
                                  defaultValue="Option 3"
                                />
                              </div>
                              <div
                                className="ui-radiobutton-box ui-widget ui-state-default"
                                ng-reflect-ng-class="[object Object]"
                              >
                                <span
                                  className="ui-radiobutton-icon ui-clickable"
                                  ng-reflect-klass="ui-radiobutton-icon ui-clickab"
                                  ng-reflect-ng-class="[object Object]"
                                ></span>
                              </div>
                            </div>
                            <label
                              className="ui-radiobutton-label ng-star-inserted"
                              ng-reflect-ng-class="[object Object]"
                              htmlFor="opt3"
                            >
                              Lavish
                            </label>
                          </p-radiobutton>
                        </div>
                      </div>
                    </div>
                    <div _ngcontent-c3="" className="ui-g-12" style={{ paddingTop: 0 }}>
                      <div
                        _ngcontent-c3=""
                        className="ui-g-8 ui-g-offset-2 ui-sm-12 ui-sm-offset-0 top-padding"
                      >
                        <div
                          _ngcontent-c3=""
                          className="ui-g-6 ui-g-offset-3 ui-sm-8 ui-sm-offset-2 top-padding"
                        >
                          <button
                            _ngcontent-c3=""
                            className="ui-button-raised ui-button-rounded theme-button hide-button-overflow-text"
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
                {<Lr />}
              </div>}





















            <div
              _ngcontent-c3=""
              className="ui-g-12 ui-md-3 text-center sm-left-right-no-padding md-no-padding-top-bottom sm-fixed-bottom md-fixed-right"
            >
              <div _ngcontent-c3="" className="ui-g-12" id="netestimatesection">
                <h4 _ngcontent-c3="" className="sm-top-bottom-no-margin">
                  Net Estimate ₹ 0
                </h4>
                <p _ngcontent-c3="" className="light-text sm-hide">
                  Estimate includes labour cost + material cost
                </p>
                <div _ngcontent-c3="" className="ui-g-12 ui-md-12">
                  <button
                    _ngcontent-c3=""
                    className="ui-button-raised ui-button-rounded theme-button hide-button-overflow-text"
                    id="getestimatebutton"
                    type="button"
                  >
                    Get Detailed Estimate
                  </button>
                </div>
              </div>
              <div
                _ngcontent-c3=""
                className="ui-g-12 light-text padding-top sm-hide"
              >
                <p _ngcontent-c3="">
                  A variation upto + or - 15% could occur in cases where your space
                  has specific requirements not accounted in the Costfinder. The
                  CostFinder uses current optimised market rates to budget your dream
                  space.
                </p>
              </div>
              <div _ngcontent-c3="" className="columns">
                <div
                  _ngcontent-c3=""
                  className="ui-g-4 ui-g-offset-4 light-text padding-top sm-hide"
                >
                  <img
                    _ngcontent-c3=""
                    className="img-responsive"
                    onclick="openForm()"
                    src="http://costfinder.consdeployer.com/assets/productselection/helpbulb.png"
                    width="100%;"
                  />
                </div>
                <div _ngcontent-c3="" className="ui-g-4 ui-g-offset-4  padding-top">
                  <button
                    _ngcontent-c3=""
                    className="btn btn-info btn-lg"
                    data-target="#test1"
                    data-toggle="modal"
                    id="help-btn"
                    type="button"
                  >
                    HELP
                  </button>
                </div>
              </div>
            </div>
            <div
              _ngcontent-c3=""
              className="modal"
              id="test1"
              role="dialog"
              style={{ zIndex: 1400 }}
            >
              <div _ngcontent-c3="" className="modal-dialog">
                <div _ngcontent-c3="" className="modal-content">
                  &nbsp;
                  <div _ngcontent-c3="" className="modal-header">
                    <p _ngcontent-c3="">HELP</p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      _ngcontent-c3=""
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                    >
                      <span _ngcontent-c3="" aria-hidden="true">
                        ×
                      </span>
                    </button>
                    {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                  </div>
                  &nbsp;&nbsp;
                  <div _ngcontent-c3="" className="modal-body">
                    <div _ngcontent-c3="" className="pb-3">
                      <button
                        _ngcontent-c3=""
                        className="option-color btn"
                        data-dismiss="modal"
                        data-target="#test2"
                        data-toggle="modal"
                        type="button"
                      >
                        Want us to fill the form
                      </button>
                    </div>
                    <div _ngcontent-c3="" className="pb-3">
                      <a
                        _ngcontent-c3=""
                        className="option-color btn"
                        href="http://www.thefivelements.com"
                        target="_blank"
                        type="button"
                      >
                        Read about COST FINDER
                      </a>
                    </div>
                    <a
                      _ngcontent-c3=""
                      className="option-color btn"
                      href="https://wa.me/919669911101 "
                      target="_blank"
                      type="button"
                    >
                      Reach Us on WHATSAPP
                      <i
                        _ngcontent-c3=""
                        aria-hidden="true"
                        className="fa fa-whatsapp"
                        id="whatsapp"
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              _ngcontent-c3=""
              className="modal"
              id="test2"
              role="dialog"
              style={{ zIndex: 1600 }}
            >
              <div _ngcontent-c3="" className="modal-dialog">
                <div _ngcontent-c3="" className="modal-content">
                  &nbsp;
                  <div _ngcontent-c3="" className="modal-header">
                    <p _ngcontent-c3="" className="text-center">
                      HELP
                    </p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button
                      _ngcontent-c3=""
                      aria-label="Close"
                      className="close"
                      data-dismiss="modal"
                      type="button"
                    >
                      <span _ngcontent-c3="" aria-hidden="true">
                        ×
                      </span>
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  </div>
                  <div _ngcontent-c3="" className="modal-body">
                    <form
                      _ngcontent-c3=""
                      noValidate=""
                      ng-reflect-form="[object Object]"
                      className="ng-untouched ng-pristine ng-invalid"
                    >
                      <div _ngcontent-c3="" className="pull-left">
                        Name:
                      </div>
                      <input
                        _ngcontent-c3=""
                        formcontrolname="name"
                        id="name"
                        type="text"
                        ng-reflect-name="name"
                        className="ng-untouched ng-pristine ng-invalid"
                      />
                      <div _ngcontent-c3="" className="pull-left pt-2">
                        Email Id:
                      </div>
                      <input
                        _ngcontent-c3=""
                        formcontrolname="email"
                        id="email"
                        type="text"
                        ng-reflect-name="email"
                        className="ng-untouched ng-pristine ng-invalid"
                      />
                      <div _ngcontent-c3="" className="pull-left pt-2">
                        Number :
                      </div>
                      <input
                        _ngcontent-c3=""
                        formcontrolname="number"
                        id="number"
                        type="number"
                        ng-reflect-name="number"
                        className="ng-untouched ng-pristine ng-invalid"
                      />
                      <div _ngcontent-c3="" className="pull-left pt-2">
                        <b _ngcontent-c3="">Basic detail:-</b>
                      </div>
                      <br _ngcontent-c3="" />
                      <div _ngcontent-c3="" className="pull-left pt-2">
                        Number of rooms:
                      </div>
                      <input
                        _ngcontent-c3=""
                        formcontrolname="no_of_bedroom"
                        id="no_of_bedroom"
                        type="text"
                        ng-reflect-name="no_of_bedroom"
                        className="ng-untouched ng-pristine ng-invalid"
                      />
                      <div _ngcontent-c3="" className="pull-left pt-2">
                        Number of bathrooms:
                      </div>
                      <input
                        _ngcontent-c3=""
                        formcontrolname="no_of_bathroom"
                        id="no_of_bathroom"
                        type="text"
                        ng-reflect-name="no_of_bathroom"
                        className="ng-untouched ng-pristine ng-invalid"
                      />
                      <div _ngcontent-c3="" className="pull-left pt-2">
                        Carpet area :
                      </div>
                      <input
                        _ngcontent-c3=""
                        formcontrolname="carpet_area"
                        id="carpet_area"
                        type="text"
                        ng-reflect-name="carpet_area"
                        className="ng-untouched ng-pristine ng-invalid"
                      />
                      <div _ngcontent-c3="" className="pt-2 pull-center ">
                        <input
                          _ngcontent-c3=""
                          className="btn btn-info btn-lg"
                          data-dismiss="modal"
                          id="want-us-form"
                          type="submit"
                          defaultValue="Submit"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <p-confirmdialog
              _ngcontent-c3=""
              className="ng-tns-c9-0"
              ng-reflect-style="[object Object]"
            ></p-confirmdialog>
          </div>

        </div>
        {/* </div> */}
      </>


    </>
  )
}


