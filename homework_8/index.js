

function myFunction() {
  var x = document.getElementById("rightnav");
  if (x.className === "rightnav") {
    x.className += " responsive";
  } else {
    x.className = "rightnav";
  }
}

// http://bl.ocks.org/nbremer/21746a9668ffdf6d8242

var margin = {top: 100, right: 100, bottom: 100, left: 100},
width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);

var data = [
[//stasis
{axis:"A",value:0.5},
{axis:"B",value:0.5},
{axis:"C",value:0.5},
{axis:"D",value:0.5},
{axis:"E",value:0.5}		
]
];

var color = d3.scale.ordinal()
.range(["#EDC951","#CC333F","#00A0B0"]);

var radarChartOptions = {
w: width,
h: height,
margin: margin,
maxValue: 1.0,
levels: 5,
roundStrokes: true,
color: color
};
//Call function to draw the Radar chart
RadarChart(".radarChart", data, radarChartOptions);
console.log("here");


// ?? var svg = d3.select("#svgHere")
//     .append("svg")





// plotly

// define radar() {
// import plotly.graph_objects as go

// fig = go.Figure(data=go.Scatterpolar(
//   r=[2, 2, 2, 2, 2],
//   theta=['INTERROGATE REALITY','DEFINE MEANING','FACILITATE ACTION', 'NOVEL & RESOURCEFUL','CRITICAL OPTIMIST'],
//   fill='toself'
// ))

// fig.update_layout(
//   polar=dict(
//     radialaxis=dict(
//       visible=False
//     ),
//   ),
//   showlegend=False
// )

// document.getElementById("radardiv") = fig.show();

//     }