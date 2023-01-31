
import React from 'react'
import './Costestimate.css'
import { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { useSelector } from "react-redux";
 

import {Chart as ChartJs, Tooltip,  ArcElement, Legend} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import changeTheNumber from '../../../redux/reducer/upDown';

ChartJs.register(
  Tooltip,  ArcElement, Legend
);




const data = {
  datasets: [{
      data: [10, 20],
      backgroundColor:[
        'PaleVioletRed	',
        'Dodgerblue	'
        
        
      ]
  },
],
// These labels appear in the legend and in the tooltips when hovering different arcs
labels: [
    'PaleVioletRed	',
    
    'Dodgerblue	'
], 
};
export const Costestimate = () => {

  const changeTheNumber = useSelector((state)=>state.changeTheNumber);

  const [data, setData] = useState({
    datasets: [{
        data: [10, 20, 30],
        backgroundColor:[
          'PaleVioletRed	',
          'Dodgerblue		',
          'Lime'
        
        ]
    },
  ],
  labels: [


      'Living Room',
      'Master Bedroom',
      'Master Bathroom',
       'Kitchen',
       'Extra Bedroom '
  ], 
});

// useEffect(()=> {
//   const fetchData = () =>  {
//     fetch('https://jsonplaceholder.typicode.com/users').then((data) => {
//       const res = data.json();
//       return res
//     }).then((res) => {
//       console.log("resss", res)
//       const label = [];
//       const data = [];
//       for(var i of res) {
//           data.push(i.name)
//           data.push(i.id)
//       }
//       setData(
//         {
//           datasets: [{
//               data:data,
//               backgroundColor:[
//                 'red',
//                 'blue',
//                 'yellow'
//               ]
//           },
//         ],
//         labels:label, 
//       }
//       )

//     }).catch(e => {
//       console.log("error", e)
//     }) 
//   }
// fetchData();
// }, [])


   return (
    <>

      <div mainboxu className="sc cs no-padding-left-right no-padding-top-bottom snipcss-oWQwA">
        <h2 mainboxu className="text-center">
          Your Total Estimate{changeTheNumber}
        </h2>
        <div mainboxu className="sc cs no-padding-top white-background">
          <div mainboxu className="sc cs ui-lg-6 theme-text-center no-padding-top">


            <section mainboxu className="theme-card card-padding-top">
              <h4 mainboxu>
                Room Wise Estimate
              </h4>

              {/* <div class="row">
                <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                  <div mainboxu className="ui-g-2 text-right">
                    <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#EB4A47" style={{ color: 'rgb(235, 74, 71)' }}>
                    </i>
                  </div>


                  <div mainboxu className="ui-g-5 text-left">
                    Living Room
                  </div>

                </div>



                <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                  <div mainboxu className="ui-g-2 text-right">
                    <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#EB4A47" style={{ color: 'rgb(235, 74, 71)' }}>
                    </i>
                  </div>


                  <div mainboxu className="ui-g-5 text-left">
                    Master Bedroom
                  </div>

                </div>


                <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                  <div mainboxu className="ui-g-2 text-right">
                    <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#66FF99" style={{ color: 'rgb(102, 255, 153)' }}>
                    </i>
                  </div>


                </div>


                <div mainboxu className="ui-g-5 text-left">
                  Master Bathroom
                </div>

              

              <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                <div mainboxu className="ui-g-2 text-right">
                  <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#66FF99" style={{ color: 'rgb(102, 255, 153)' }}>
                  </i>
                </div>


              </div>


              <div mainboxu className="ui-g-5 text-left">
                Master Bathroom
              </div>
              <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                <div mainboxu className="ui-g-2 text-right">
                  <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#66FF99" style={{ color: 'rgb(102, 255, 153)' }}>
                  </i>
                </div>


              </div>


              <div mainboxu className="ui-g-5 text-left">
                Master Bathroom
              </div>

          </div> */}




          <p-chart mainboxu type="doughnut" ng-reflect-type="doughnut" ng-reflect-data="[object Object]" >


          <div className="App" style={{width:'70%', height:'70%'}}>
      <Doughnut data={data}/>
    </div>


            <div >/
              {/* <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className>
                  </div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className>
                  </div>
                </div>
              </div> */}

              <canvas width={1396} height={697} style={{  height: '165px', width: '531px' }} className="chartjs-render-monitor">
              </canvas>

            </div>
          </p-chart>
        </section>



        <div mainboxu className="sc" id="room-detailed-estimate">
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#EB4A47" style={{ color: 'rgb(235, 74, 71)' }}>
              </i>
            </div>


            <div mainboxu className="ui-g-5 text-left">
              Living Room
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#1CA8FE" style={{ color: 'rgb(28, 168, 254)' }}>
              </i>
            </div>


            <div mainboxu className="ui-g-5 text-left">
              Master Bedroom
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#66FF99" style={{ color: 'rgb(102, 255, 153)' }}>
              </i>
            </div>


            <div mainboxu className="ui-g-5 text-left">
              Master Bathroom
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#B3FFB3" style={{ color: 'rgb(179, 255, 179)' }}>
              </i>
            </div>

            <div mainboxu className="ui-g-5 text-left">
              Kitchen
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#00cc7a" style={{ color: 'rgb(0, 204, 122)' }}>
              </i>
            </div>
            <div mainboxu className="ui-g-5 text-left">
              Extra Bedroom 2
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
        </div>
      </div>

      <div mainboxu className="sc cs ui-lg-6 theme-text-center no-padding-top">
        <section mainboxu className="theme-card card-padding-top">
          <h4 mainboxu>
            Scope Wise Estimate
          </h4>





          {/* <div class="row">
                <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                  <div mainboxu className="ui-g-2 text-right">
                    <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#EB4A47" style={{ color: 'rgb(235, 74, 71)' }}>
                    </i>
                  </div>


                  <div mainboxu className="ui-g-5 text-left">
                    Living Room
                  </div>

                </div>



                <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                  <div mainboxu className="ui-g-2 text-right">
                    <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#EB4A47" style={{ color: 'rgb(235, 74, 71)' }}>
                    </i>
                  </div>


                  <div mainboxu className="ui-g-5 text-left">
                    Master Bedroom
                  </div>

                </div>


                <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                  <div mainboxu className="ui-g-2 text-right">
                    <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#66FF99" style={{ color: 'rgb(102, 255, 153)' }}>
                    </i>
                  </div>


                </div>


                <div mainboxu className="ui-g-5 text-left">
                  Master Bathroom
                </div>

              

              <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                <div mainboxu className="ui-g-2 text-right">
                  <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#66FF99" style={{ color: 'rgb(102, 255, 153)' }}>
                  </i>
                </div>


              </div>


              <div mainboxu className="ui-g-5 text-left">
                Master Bathroom
              </div>
              <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">

                <div mainboxu className="ui-g-2 text-right">
                  <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#66FF99" style={{ color: 'rgb(102, 255, 153)' }}>
                  </i>
                </div>


              </div>


              <div mainboxu className="ui-g-5 text-left">
                Master Bathroom
              </div>

          </div> */}

          <p-chart mainboxu className type="doughnut" ng-reflect-type="doughnut" ng-reflect-data="[object Object]">


          <div className="App" style={{width:'70%', height:'70%'}}>
      <Doughnut data={data}/>
      </div>
            <div style={{ position: 'relative' }}>
              <div className="chartjs-size-monitor">
                <div className="chartjs-size-monitor-expand">
                  <div className>
                  </div>
                </div>
                <div className="chartjs-size-monitor-shrink">
                  <div className>
                  </div>
                </div>
              </div>
              <canvas width={1396} height={697} style={{ display: 'block', height: '165px', width: '531px' }} className="chartjs-render-monitor tether-target-attached-top tether-element-attached-top tether-element-attached-center tether-target-attached-center">
              </canvas>
            </div>
          </p-chart>
        </section>
        <div mainboxu className="sc" id="scope-detailed-estimate">
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#EB4A47" style={{ color: 'rgb(235, 74, 71)' }}>
              </i>
            </div>
            <div mainboxu className="ui-g-5 text-left">
              Flooring
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#248f24" style={{ color: 'rgb(36, 143, 36)' }}>
              </i>
            </div>
            <div mainboxu className="ui-g-5 text-left">
              Walls
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#B3FFB3" style={{ color: 'rgb(179, 255, 179)' }}>
              </i>
            </div>
            <div mainboxu className="ui-g-5 text-left">
              Ceiling
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#FF6384" style={{ color: 'rgb(255, 99, 132)' }}>
              </i>
            </div>
            <div mainboxu className="ui-g-5 text-left">
              Electricals
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#EB4A47" style={{ color: 'rgb(235, 74, 71)' }}>
              </i>
            </div>
            <div mainboxu className="ui-g-5 text-left">
              Windows
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#B3FFB3" style={{ color: 'rgb(179, 255, 179)' }}>
              </i>
            </div>
            <div mainboxu className="ui-g-5 text-left">
              Doors
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#b3b300" style={{ color: 'rgb(179, 179, 0)' }}>
              </i>
            </div>
            <div mainboxu className="ui-g-5 text-left">
              Furniture
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
          <div mainboxu className="sc cs text-left no-padding-top-bottom ng-star-inserted">
            <div mainboxu className="ui-g-2 text-right">
              <i mainboxu appcolor className="fas fa-square colorsymbol" ng-reflect-highlight-color="#804000" style={{ color: 'rgb(128, 64, 0)' }}>
              </i>
            </div>
            <div mainboxu className="ui-g-5 text-left">
              Plumbing
            </div>
            <div mainboxu className="ui-g-5 text-left">
              0
            </div>
          </div>
        </div>
      </div>
      <div mainboxu className="sc text-left padding-top">
        <p mainboxu>
          Approx. 15% Amount may vary upon specific requirements or if special customization has to be made
        </p>
      </div>
      <div mainboxu className="ui-g-10 ui-g-offset-1">
        <div mainboxu className="ui-g-2 ui-g-offset-5 ui-sm-6 ui-sm-offset-3 ui-md-2 ui-md-offset-5" id="button-holder-div">
          <button mainboxu className="ui-button-raised ui-button-rounded theme-button" id="estimate-download-btn" type="button">
            Download Estimate
          </button>
        </div>
        <div mainboxu className="backdrop" ng-reflect-ng-style="[object Object]" style={{ display: 'none' }}>
        </div>
        <div mainboxu className="modal" role="dialog" tabIndex={-1} ng-reflect-ng-style="[object Object]" style={{ display: 'none' }}>
          &nbsp;
          <div mainboxu className="modal-dialog" role="document">
            &nbsp;&nbsp;&nbsp;
            <div mainboxu className="modal-content">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div mainboxu className="modal-header">
                <p mainboxu>
                  Provide Your Details
                </p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <button mainboxu aria-label="Close" className="close" type="button">
                  <span mainboxu aria-hidden="true">
                    ×
                  </span>
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div mainboxu className="modal-body">
                <form mainboxu ngnativevalidate ng-reflect-form="[object Object]" className="ng-untouched ng-pristine ng-invalid">
                  <div mainboxu className="row">
                    <div mainboxu className="col-sm-3 user-details-label">
                      Name:
                    </div>
                    <div mainboxu className="col-sm-9">
                    </div>
                  </div>
                  <input mainboxu className="form-control user-deails-inputs ng-untouched ng-pristine ng-invalid" formcontrolname="name" id="name" minLength={5} required type="text" ng-reflect-required ng-reflect-minlength={5} ng-reflect-name="name" />
                  <div mainboxu className="row pt-2">
                    <div mainboxu className="col-sm-3 user-details-label">
                      Email:
                    </div>
                    <div mainboxu className="col-sm-9">
                    </div>
                  </div>
                  <input mainboxu className="user-deails-inputs ng-untouched ng-pristine ng-invalid" formcontrolname="email" id="email" required type="email" ng-reflect-required ng-reflect-name="email" />
                  <div mainboxu className="pb-5">
                    <div mainboxu className="row pt-2">
                      <div mainboxu className="col-sm-3 user-details-label">
                        Contact no:
                      </div>
                      <div mainboxu className="col-sm-9">
                      </div>
                    </div>
                    <input mainboxu className="user-deails-inputs ng-untouched ng-pristine ng-invalid" formcontrolname="phoneno" id="phoneno" minLength={10} required type="text" ng-reflect-required ng-reflect-minlength={10} ng-reflect-name="phoneno" />
                  </div>
                  <input mainboxu id="user-details-submit" type="submit" defaultValue="Submit" />
                </form>
              </div>
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
            </div>
            &nbsp;
          </div>
        </div>
      </div>
    </div>
      </div >


    </>
  )
}
