document.body.style.position = 'relative';

var container = document.getElementById('chart');
// document.body.appendChild(container);

var width = 1300;
var height = 500;


var chart = LightweightCharts.createChart(container, {
   rightPriceScale: {
      scaleMargins: {
         top: 0.2,
         bottom: 0.2,
      },
      borderVisible: false,
   },
   timeScale: {
      borderVisible: false,
   },
   layout: {
      backgroundColor: '#ffffff',
      textColor: '#333',
   },
   grid: {
      horzLines: {
         color: '#eee',
      },
      vertLines: {
         color: '#ffffff',
      },
   },
   crosshair: {
      vertLine: {
         labelVisible: false,
      },
   },
});

// chart.resize(width, height);

var series = chart.addAreaSeries({
   backgroundColor: '000',
   topColor: '#6991c7',
   bottomColor: '#a3bded',
   lineColor: '#263258',
   lineWidth: 2,
});

series.setData([{
   time: "2021-03-28",
   value: 154
},
{
   time: "2021-03-29",
   value: 154.2
},
{
   time: "2021-03-30",
   value: 155.60001
},
{
   time: "2021-04-02",
   value: 156.25
},
{
   time: "2021-04-03",
   value: 156.25
},
{
   time: "2021-04-04",
   value: 156.05
},
{
   time: "2021-04-05",
   value: 158.05
},
{
   time: "2021-04-06",
   value: 157.3
},
{
   time: "2021-04-09",
   value: 144
},
{
   time: "2021-04-10",
   value: 144.8
},
{
   time: "2021-04-11",
   value: 143.5
},
{
   time: "2021-04-12",
   value: 147.05
},
{
   time: "2021-04-13",
   value: 144.85001
},
{
   time: "2021-04-16",
   value: 145.39999
},
{
   time: "2021-04-17",
   value: 147.3
},
{
   time: "2021-04-18",
   value: 153.55
},
{
   time: "2021-04-19",
   value: 150.95
},
{
   time: "2021-04-20",
   value: 149.39999
},
{
   time: "2021-04-23",
   value: 148.5
},
{
   time: "2021-04-24",
   value: 146.60001
},
{
   time: "2021-04-25",
   value: 144.45
},
{
   time: "2021-04-26",
   value: 145.60001
},
{
   time: "2021-04-27",
   value: 144.3
},
{
   time: "2021-04-30",
   value: 144
},
{
   time: "2021-05-02",
   value: 147.3
},
{
   time: "2021-05-03",
   value: 144.2
},
{
   time: "2021-05-04",
   value: 141.64999
},
{
   time: "2021-05-07",
   value: 141.89999
},
{
   time: "2021-05-08",
   value: 140.39999
},
{
   time: "2021-05-10",
   value: 139.8
},
{
   time: "2021-05-11",
   value: 137.5
},
{
   time: "2021-05-14",
   value: 136.14999
},
{
   time: "2021-05-15",
   value: 138
},
{
   time: "2021-05-16",
   value: 137.95
},
{
   time: "2021-05-17",
   value: 137.95
},
{
   time: "2021-05-18",
   value: 136.75
},
{
   time: "2021-05-21",
   value: 136.2
},
{
   time: "2021-05-22",
   value: 135
},
{
   time: "2021-05-23",
   value: 132.55
},
{
   time: "2021-05-24",
   value: 132.7
},
{
   time: "2021-05-25",
   value: 132.2
},
{
   time: "2021-05-28",
   value: 131.55
},
{
   time: "2021-05-29",
   value: 131.85001
},
{
   time: "2021-05-30",
   value: 139.85001
},
{
   time: "2021-05-31",
   value: 140.8
},
{
   time: "2021-06-01",
   value: 139.64999
},
{
   time: "2021-06-04",
   value: 137.10001
},
{
   time: "2021-06-05",
   value: 139.25
},
{
   time: "2021-06-06",
   value: 141.3
},
{
   time: "2021-06-07",
   value: 145
},
{
   time: "2021-06-08",
   value: 143.89999
},
{
   time: "2021-06-11",
   value: 142.7
},
{
   time: "2021-06-13",
   value: 144.05
},
{
   time: "2021-06-14",
   value: 143.55
},
{
   time: "2021-06-15",
   value: 140.5
},
{
   time: "2021-06-18",
   value: 139.64999
},
{
   time: "2021-06-19",
   value: 138
},
{
   time: "2021-06-20",
   value: 141
},
{
   time: "2021-06-21",
   value: 140.55
},
{
   time: "2021-06-22",
   value: 140.55
},
{
   time: "2021-06-25",
   value: 140.75
},
{
   time: "2021-06-26",
   value: 140.64999
},
{
   time: "2021-06-27",
   value: 141.14999
},
{
   time: "2021-06-28",
   value: 139.8
},
{
   time: "2021-06-29",
   value: 139.8
},
{
   time: "2021-07-02",
   value: 140.14999
},
{
   time: "2021-07-03",
   value: 143.05
},
{
   time: "2021-07-04",
   value: 140
},
{
   time: "2021-07-05",
   value: 129.2
},
{
   time: "2021-07-06",
   value: 129.55
},
{
   time: "2021-07-09",
   value: 128.3
},
{
   time: "2021-07-10",
   value: 126.55
},
{
   time: "2021-07-11",
   value: 124.3
},
{
   time: "2021-07-12",
   value: 124.8
},
{
   time: "2021-07-13",
   value: 123.25
},
{
   time: "2021-07-16",
   value: 123
},
{
   time: "2021-07-17",
   value: 124.25
},
{
   time: "2021-07-18",
   value: 123
},
{
   time: "2021-07-19",
   value: 121
},
{
   time: "2021-07-20",
   value: 121.45
},
{
   time: "2021-07-23",
   value: 123.8
},
{
   time: "2021-07-24",
   value: 122.15
},
{
   time: "2021-07-25",
   value: 121.3
},
{
   time: "2021-07-26",
   value: 122.7
},
{
   time: "2021-07-27",
   value: 122.2
},
{
   time: "2021-07-30",
   value: 121.7
},
{
   time: "2021-07-31",
   value: 122.95
},
{
   time: "2021-08-01",
   value: 121
},
{
   time: "2021-08-02",
   value: 116
},
{
   time: "2021-08-03",
   value: 118.1
},
{
   time: "2021-08-06",
   value: 114.3
},
{
   time: "2021-08-07",
   value: 114.25
},
{
   time: "2021-08-08",
   value: 111.85
},
{
   time: "2021-08-09",
   value: 109.7
},
{
   time: "2021-08-10",
   value: 105
},
{
   time: "2021-08-13",
   value: 105.75
},
{
   time: "2021-08-14",
   value: 107.25
},
{
   time: "2021-08-15",
   value: 107.4
},
{
   time: "2021-08-16",
   value: 110.5
},
{
   time: "2021-08-17",
   value: 109
},
{
   time: "2021-08-20",
   value: 108.95
},
{
   time: "2021-08-21",
   value: 108.35
},
{
   time: "2021-08-22",
   value: 108.6
},
{
   time: "2021-08-23",
   value: 105.65
},
{
   time: "2021-08-24",
   value: 104.45
},
{
   time: "2021-08-27",
   value: 106.2
},
{
   time: "2021-08-28",
   value: 106.55
},
{
   time: "2021-08-29",
   value: 111.8
},
{
   time: "2021-08-30",
   value: 115.5
},
{
   time: "2021-08-31",
   value: 115.5
},
{
   time: "2021-09-03",
   value: 114.55
},
{
   time: "2021-09-04",
   value: 112.75
},
{
   time: "2021-09-05",
   value: 111.5
},
{
   time: "2021-09-06",
   value: 108.1
},
{
   time: "2021-09-07",
   value: 108.55
},
{
   time: "2021-09-10",
   value: 106.5
},
{
   time: "2021-09-11",
   value: 105.1
},
{
   time: "2021-09-12",
   value: 107.2
},
{
   time: "2021-09-13",
   value: 107.1
},
{
   time: "2021-09-14",
   value: 105.75
},
{
   time: "2021-09-17",
   value: 106.05
},
{
   time: "2021-09-18",
   value: 109.15
},
{
   time: "2021-09-19",
   value: 111.4
},
{
   time: "2021-09-20",
   value: 111
},
{
   time: "2021-09-21",
   value: 111
},
{
   time: "2021-09-24",
   value: 108.95
},
{
   time: "2021-09-25",
   value: 106.65
},
{
   time: "2021-09-26",
   value: 106.7
},
{
   time: "2021-09-27",
   value: 107.05
},
{
   time: "2021-09-28",
   value: 106.55
},
{
   time: "2021-10-01",
   value: 106.2
},
{
   time: "2021-10-02",
   value: 106.4
},
{
   time: "2021-10-03",
   value: 107.1
},
{
   time: "2021-10-04",
   value: 106.4
},
{
   time: "2021-10-05",
   value: 104.65
},
{
   time: "2021-10-08",
   value: 102.65
},
{
   time: "2021-10-09",
   value: 102.1
},
{
   time: "2021-10-10",
   value: 102.15
},
{
   time: "2021-10-11",
   value: 100.9
},
{
   time: "2021-10-12",
   value: 102
},
{
   time: "2021-10-15",
   value: 100.15
},
{
   time: "2021-10-16",
   value: 99
},
{
   time: "2021-10-17",
   value: 98
},
{
   time: "2021-10-18",
   value: 96
},
{
   time: "2021-10-19",
   value: 95.5
},
{
   time: "2021-10-22",
   value: 92.400002
},
{
   time: "2021-10-23",
   value: 92.300003
},
{
   time: "2021-10-24",
   value: 92.900002
},
{
   time: "2021-10-25",
   value: 91.849998
},
{
   time: "2021-10-26",
   value: 91.599998
},
{
   time: "2021-10-29",
   value: 94.050003
},
{
   time: "2021-10-30",
   value: 98.25
},
{
   time: "2021-10-31",
   value: 97.25
},
{
   time: "2021-11-01",
   value: 96.879997
},
{
   time: "2021-11-02",
   value: 101.78
},
{
   time: "2021-11-06",
   value: 102.4
},
{
   time: "2021-11-07",
   value: 100.6
},
{
   time: "2021-11-08",
   value: 98.5
},
{
   time: "2021-11-09",
   value: 95.139999
},
{
   time: "2021-11-12",
   value: 96.900002
},
{
   time: "2021-11-13",
   value: 97.400002
},
{
   time: "2021-11-14",
   value: 103.3
},
{
   time: "2021-11-15",
   value: 102.74
},
{
   time: "2021-11-16",
   value: 101.2
},
{
   time: "2021-11-19",
   value: 98.720001
},
{
   time: "2021-11-20",
   value: 102.2
},
{
   time: "2021-11-21",
   value: 108.8
},
{
   time: "2021-11-22",
   value: 109.9
},
{
   time: "2021-11-23",
   value: 113.74
},
{
   time: "2021-11-26",
   value: 110.9
},
{
   time: "2021-11-27",
   value: 113.28
},
{
   time: "2021-11-28",
   value: 113.6
},
{
   time: "2021-11-29",
   value: 113.14
},
{
   time: "2021-11-30",
   value: 114.4
},
{
   time: "2021-12-03",
   value: 111.84
},
{
   time: "2021-12-04",
   value: 106.7
},
{
   time: "2021-12-05",
   value: 107.8
},
{
   time: "2021-12-06",
   value: 106.44
},
{
   time: "2021-12-07",
   value: 103.7
},
{
   time: "2021-12-10",
   value: 101.02
},
{
   time: "2021-12-11",
   value: 102.72
},
{
   time: "2021-12-12",
   value: 101.8
},
{
   time: "2021-12-13",
   value: 102
},
{
   time: "2021-12-14",
   value: 102.1
},
{
   time: "2021-12-17",
   value: 101.04
},
{
   time: "2021-12-18",
   value: 101.6
},
{
   time: "2021-12-19",
   value: 102
},
{
   time: "2021-12-20",
   value: 102.02
},
{
   time: "2021-12-21",
   value: 102.2
},
{
   time: "2021-12-24",
   value: 102.1
},
{
   time: "2021-12-25",
   value: 100.8
},
{
   time: "2021-12-26",
   value: 101.02
},
{
   time: "2021-12-27",
   value: 100.5
},
{
   time: "2021-12-28",
   value: 101
},
{
   time: "2022-01-03",
   value: 101.5
},
{
   time: "2022-01-04",
   value: 101.1
},
{
   time: "2022-01-08",
   value: 101.1
},
{
   time: "2022-01-09",
   value: 102.06
},
{
   time: "2022-01-10",
   value: 105.14
},
{
   time: "2022-01-11",
   value: 104.66
},
{
   time: "2022-01-14",
   value: 106.22
},
{
   time: "2022-01-15",
   value: 106.98
},
{
   time: "2022-01-16",
   value: 108.4
},
{
   time: "2022-01-17",
   value: 109.06
},
{
   time: "2022-01-18",
   value: 107
},
{
   time: "2022-01-21",
   value: 105.8
},
{
   time: "2022-01-22",
   value: 105.24
},
{
   time: "2022-01-23",
   value: 105.4
},
{
   time: "2022-01-24",
   value: 105.38
},
{
   time: "2022-01-25",
   value: 105.7
},
{
   time: "2022-01-28",
   value: 105.8
},
{
   time: "2022-01-29",
   value: 106.1
},
{
   time: "2022-01-30",
   value: 108.6
},
{
   time: "2022-01-31",
   value: 107.92
},
{
   time: "2022-02-01",
   value: 105.22
},
{
   time: "2022-02-04",
   value: 102.44
},
{
   time: "2022-02-05",
   value: 102.26
},
{
   time: "2022-02-06",
   value: 102
},
{
   time: "2022-02-07",
   value: 101.62
},
{
   time: "2022-02-08",
   value: 101.9
},
{
   time: "2022-02-11",
   value: 101.78
},
{
   time: "2022-02-12",
   value: 102.7
},
{
   time: "2022-02-13",
   value: 100.14
},
{
   time: "2022-02-14",
   value: 101.36
},
{
   time: "2022-02-15",
   value: 101.62
},
{
   time: "2022-02-18",
   value: 100.74
},
{
   time: "2022-02-19",
   value: 100
},
{
   time: "2022-02-20",
   value: 100.04
},
{
   time: "2022-02-21",
   value: 100
},
{
   time: "2022-02-22",
   value: 100.12
},
{
   time: "2022-02-25",
   value: 100.04
},
{
   time: "2022-02-26",
   value: 98.980003
},
{
   time: "2022-02-27",
   value: 97.699997
},
{
   time: "2022-02-28",
   value: 97.099998
},
{
   time: "2022-03-01",
   value: 96.760002
},
{
   time: "2022-03-04",
   value: 98.360001
},
{
   time: "2022-03-05",
   value: 96.260002
},
{
   time: "2022-03-06",
   value: 98.120003
},
{
   time: "2022-03-07",
   value: 99.68
},
{
   time: "2022-03-11",
   value: 102.1
},
{
   time: "2022-03-12",
   value: 100.22
},
{
   time: "2022-03-13",
   value: 100.5
},
{
   time: "2022-03-14",
   value: 99.660004
},
{
   time: "2022-03-15",
   value: 100.08
},
{
   time: "2022-03-18",
   value: 99.919998
},
{
   time: "2022-03-19",
   value: 99.459999
},
{
   time: "2022-03-20",
   value: 98.220001
},
{
   time: "2022-03-21",
   value: 97.300003
},
{
   time: "2022-03-22",
   value: 97.660004
},
{
   time: "2022-03-25",
   value: 97
},
{
   time: "2022-03-26",
   value: 97.019997
},
{
   time: "2022-03-27",
   value: 96.099998
},
{
   time: "2022-03-28",
   value: 96.699997
},
{
   time: "2022-03-29",
   value: 96.300003
},
{
   time: "2022-04-01",
   value: 97.779999
},
{
   time: "2022-04-02",
   value: 98.360001
},
{
   time: "2022-04-03",
   value: 98.5
},
{
   time: "2022-04-04",
   value: 98.360001
},
{
   time: "2022-04-05",
   value: 99.540001
},
{
   time: "2022-04-08",
   value: 98.580002
},
{
   time: "2022-04-09",
   value: 97.239998
},
{
   time: "2022-04-10",
   value: 97.32
},
{
   time: "2022-04-11",
   value: 98.400002
},
{
   time: "2022-04-12",
   value: 98.220001
},
{
   time: "2022-04-15",
   value: 98.720001
},
{
   time: "2022-04-16",
   value: 99.120003
},
{
   time: "2022-04-17",
   value: 98.620003
},
{
   time: "2022-04-18",
   value: 98
},
{
   time: "2022-04-19",
   value: 97.599998
},
{
   time: "2022-04-22",
   value: 97.599998
},
{
   time: "2022-04-23",
   value: 96.800003
},
{
   time: "2022-04-24",
   value: 96.32
},
{
   time: "2022-04-25",
   value: 96.339996
},
{
   time: "2022-04-26",
   value: 97.120003
},
{
   time: "2022-04-29",
   value: 96.980003
},
{
   time: "2022-04-30",
   value: 96.32
},
{
   time: "2022-05-02",
   value: 96.860001
},
{
   time: "2022-05-03",
   value: 96.699997
},
{
   time: "2022-05-06",
   value: 94.940002
},
{
   time: "2022-05-07",
   value: 94.5
},
{
   time: "2022-05-08",
   value: 94.239998
},
{
   time: "2022-05-10",
   value: 92.900002
},
{
   time: "2022-05-13",
   value: 91.279999
},
{
   time: "2022-05-14",
   value: 91.599998
},
{
   time: "2022-05-15",
   value: 90.080002
},
{
   time: "2022-05-16",
   value: 91.68
},
{
   time: "2022-05-17",
   value: 91.959999
},
{
   time: "2022-05-20",
   value: 91.080002
},
{
   time: "2022-05-21",
   value: 90.760002
},
{
   time: "2022-05-22",
   value: 91
},
{
   time: "2022-05-23",
   value: 90.739998
},
{
   time: "2022-05-24",
   value: 91
},
{
   time: "2022-05-27",
   value: 91.199997
},
{
   time: "2022-05-28",
   value: 90.68
},
{
   time: "2022-05-29",
   value: 91.120003
},
{
   time: "2022-05-30",
   value: 90.419998
},
{
   time: "2022-05-31",
   value: 93.800003
},
{
   time: "2022-06-03",
   value: 96.800003
},
{
   time: "2022-06-04",
   value: 96.34
},
{
   time: "2022-06-05",
   value: 95.94
}
]);

function businessDayToString(businessDay) {
   return businessDay.year + '-' + businessDay.month + '-' + businessDay.day;
}

var toolTipWidth = 80;
var toolTipHeight = 80;
var toolTipMargin = 15;

var toolTip = document.createElement('div');
toolTip.className = 'floating-tooltip-2';
container.appendChild(toolTip);

// update tooltip
chart.subscribeCrosshairMove(function (param) {
   if (param.point === undefined || !param.time || param.point.x < 0 || param.point.x > container.clientWidth || param.point.y < 0 || param.point.y > container.clientHeight) {
      toolTip.style.display = 'none';
   } else {
      const dateStr = businessDayToString(param.time);
      toolTip.style.display = 'block';
      var price = param.seriesPrices.get(series);
      toolTip.innerHTML = '<div style="color: #009688">Itera.</div><div style="font-size: 24px; margin: 4px 0px; color: #21384d">' + Math.round(100 * price) / 100 + '</div><div style="color: #21384d">' + dateStr + '</div>';
      var coordinate = series.priceToCoordinate(price);
      var shiftedCoordinate = param.point.x - 50;
      if (coordinate === null) {
         return;
      }
      shiftedCoordinate = Math.max(0, Math.min(container.clientWidth - toolTipWidth, shiftedCoordinate));
      var coordinateY = coordinate - toolTipHeight - toolTipMargin > 0 ? coordinate - toolTipHeight - toolTipMargin : Math.max(0, Math.min(container.clientHeight - toolTipHeight - toolTipMargin, coordinate + toolTipMargin));
      toolTip.style.left = shiftedCoordinate + 'px';
      toolTip.style.top = coordinateY + 'px';
   }
});
