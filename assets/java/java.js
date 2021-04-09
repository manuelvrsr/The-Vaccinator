// create list below search bar that shows previous searches
    //will be saved on local storage
//add event listener to search button, and if clicked, run function DisplayData()
    //run funciton  that will display both the map and the graph for that specific state
    // the right side will parse out the data by state
            var listAreaDoc = $('#list')
            var searchTextAreaDoc = $('#searchText')
            var searchButtonDoc = $('#searchButton')
            var stateName = 'California'
            var historyDoc = $('#historyList')
            
            
            function displayData (stateName) {
                
              
              
              var stateName = searchTextAreaDoc.val();
              
              
              
              console.log (stateName);
              runAPIs (stateName) ;
            
              var covidConfirmedCases = returnCovidData[0];
              covidConfirmedCases = covidConfirmedCases.toString();
              
              var covidRecoveredCases = returnCovidData[1];
              covidRecoveredCases = covidRecoveredCases.toString();
            
              var covidDeathCases = returnCovidData[2];
              covidDeathCases = covidDeathCases.toString();
            
              var stateShotsGiven = returnVaccineData [0];
              stateShotsGiven = stateShotsGiven.toString();
              
              
            
            
            
            
            
            
                var Fact1List = $('#Fact1Lista');
                var Fact2List = $('#Fact2Lista');
                var Fact3List = $('#Fact3Lista');
                var Fact4List = $('#Fact4Lista');
                var Fact5List = $('#Fact5Lista');
                var Fact6List = $('#Fact6Lista');
                var Fact7List = $('#Fact7Lista');
                var Fact8List = $('#Fact8Lista');
            
            
            
                Fact1List.text ('confirmed cases: ' + covidConfirmedCases  );
                Fact2List.text ('recovered: ' + covidRecoveredCases);
                Fact3List.text ('deaths: ' + covidDeathCases );
                Fact4List.text ('number of vaccines state was given: ' + stateShotsGiven );
                Fact5List.text (' number of people vaccinated: ' + returnVaccineData [1] );
                Fact6List.text ('percentage of people vacinated: ' + returnVaccineData [2] + '%'  );
                Fact7List.text ('number of people fully vaccinated: ' + returnVaccineData [3] );
                Fact8List.text ('amount of daily vaccinations: ' + returnVaccineData [4] );
            
            
            
                Fact1List.append(Fact1List);
                Fact2List.append(Fact2List);
                Fact3List.append(Fact3List);
                Fact4List.append(Fact4List);
                Fact5List.append(Fact5List);
                Fact6List.append(Fact6List);
                Fact7List.append(Fact7List);
                Fact8List.append(Fact8List);
            
               
                console.log(oldData);
            
                var newData = oldData.reverse();
                
            
            
            //********************Graph***************************
            
            
                $('#lineChart').replaceWith($('<canvas id="lineChart" height="100px" width="100px"></canvas>'));
                const CHART = $('#lineChart');
                console.log(CHART);
                let lineChart = new Chart(CHART, {
                  type: 'line',
                  data: {
                    labels: ["January", "February", "March", "April"], //labels the x axis
                    datasets: [
                        {   //everything here styles the graph
                            label: "number of people vaccinated",
                            fill: true,
                            lineTension: 0.1,
                           
                            backgroundColor: "rgba(75, 192, 192, 0.4)",
                            
                            borderColor: "rgba(75, 192, 192, 1)",
                            borderCapStyle: 'butt',
                            borderDash: [],
                            borderDashOffset: 0.0,
                            borderJoinStyle: 'miter',
                            
                            pointBorderColor: "rgba(75,192,192,1)",
                            pointBackgroundColor: "#fff",
                            pointBorderWidth: 1,
                            pointHoverRadius: 5,
                            pointHitRadius: 10,
                            // input for data set
                            data: newData ,
                        }
                    ]}
                
                });
            
            }
            

             //local storage... hopefully

             var stateHistory = JSON.parse(localStorage.getItem ("arrayList") );
            
            if ( !stateHistory ) {
              stateHistory = [];
            }

            function addToArray() {
              if (searchTextAreaDoc.value != "" ) {
                stateHistory.unshift (searchTextAreaDoc.val());
                console.log(stateHistory);

                localStorage.setItem("arrayList",JSON.stringify(stateHistory));
                searchList();
                
              }
          
            }
            
            function searchList () {

              for (var i = 0 ; i< stateHistory.length; i++) {
                var createList = $('<li>');
                createList.text (stateHistory [i])
                historyDoc.append(createList);

              }

            }
            
            //function for event listener
            function displayData2(){
              
              var stateName = searchTextAreaDoc.val();
              var displayErrorDoc = $('#error');

              console.log(stateName);

              var states = ['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','District of Columbia','Florida','Georgia','Guam','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio','Oklahoma','Oregon','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];
             
              for ( var i = 0 ; i < states.length; i++){
                if (stateName === states[i]){
                  
                  displayErrorDoc.empty();

                  displayErrorDoc.append(displayErrorDoc);

                  runAPIs(stateName);
                  setTimeout(function(){ displayData(stateName);}, 300); 
                  addToArray();            

                 

                }
                else {
                  
                  displayErrorDoc.text('please enter state name correctly');
                  displayErrorDoc.css (  'color', 'red' );
                  displayErrorDoc.append(displayErrorDoc);

                 



                }
              }
             
            
            }


            function clickableHistory (){




            }
            
            
            
            historyDoc.on ('click', clickableHistory)

            searchButtonDoc.on ('click', displayData2)
            

            
            


            
            
            //********************Graph***************************
            
            

            
            
            //nothing/ test
            
            
            
            /*const config = {
                type: 'line',
                data: data,
                options: {
                  responsive: true,
                  plugins: {
                    tooltip: {
                      mode: 'index',
                      intersect: false
                    },
                    title: {
                      display: true,
                      text: 'Chart.js Line Chart'
                    }
                  },
                  hover: {
                    mode: 'index',
                    intersec: false
                  },
                  scales: {
                    x: {
                      title: {
                        display: true,
                        text: 'Month'
                      }
                    },
                    y: {
                      title: {
                        display: true,
                        text: 'Value'
                      },
                      min: 0,
                      max: 100,
                      ticks: {
                        // forces step size to be 50 units
                        stepSize: 50
                      }
                    }
                  }
                },
              };
              const DATA_COUNT = 7;
            const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
            const labels = Utils.months({count: 7});
            const data = {
              labels: labels,
              datasets: [
                {
                  label: 'Dataset 1',
                  data: Utils.numbers(NUMBER_CFG),
                  borderColor: Utils.CHART_COLORS.red,
                  backgroundColor: Utils.CHART_COLORS.red,
                },
                {
                  label: 'Dataset 2',
                  data: Utils.numbers(NUMBER_CFG),
                  borderColor: Utils.CHART_COLORS.blue,
                  backgroundColor: Utils.CHART_COLORS.blue,
                }
              ]
            };
            */