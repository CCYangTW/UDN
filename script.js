google.charts.load('current', {
'packages': ['bar']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
var data = google.visualization.arrayToDataTable([
['年份', '行人死亡人數', '總死亡人數'],
['2018', 406, 2780],
['2019', 458, 2865],
['2020', 432, 2972],
['2021', 410, 2962],
['2022', 394, 3064]
]);

var options = {
chart: {
title: '2018～2022年交通事故死亡人數統計',

},
bars: 'vertical',
vAxis: {
format: 'decimal'
},
height: 400,
colors: ['#1b9e77', '#d95f02']
};

var chart = new google.charts.Bar(document.getElementById('chart_div'));

chart.draw(data, google.charts.Bar.convertOptions(options));

var btns = document.getElementById('btn-group');

btns.onclick = function(e) {

if (e.target.tagName === 'BUTTON') {
options.vAxis.format = e.target.id === 'none' ? '' : e.target.id;
chart.draw(data, google.charts.Bar.convertOptions(options));
}
}
}