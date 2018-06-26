google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable(),
      options = {
        width: 800,
        height: 500,
        backgroundColor: {
          fill: '#171b23',
          opacity: 100
        },
        hAxis: {
          textStyle: {
            color: '#bcc5ca'
          }
        },
        vAxis: {
          textStyle: {
            color: '#bcc5ca'
          }
        },
        legend: {
          textStyle: {
            color: '#bcc5ca'
          }
        }
      };

  data.addColumn('string', '');
  data.addColumn('number', 'RU');
  data.addColumn('number', 'FR');
  data.addColumn('number', 'SP');
  data.addColumn('number', 'EN');
  data.addColumn('number', 'PT');

  data.addRows([
    ['Печаль', 8.2163, 23.385125000000006, 19.003794945980417, 19.003794945980417, 14.899969892473102],
    ['Радость', 20.301, 33.04941666666667, 26.638827941176473, 42.08237586522642, 36.666264516129026],
    ['Страх', 3.801, 9.008108333333332, 9.502714705882347, 7.593078373924316, 8.5775505376344],
    ['Отвращение', 10.47895, 15.946433333333335, 20.787857352941174, 14.991822834645536, 15.113996774193536],
    ['Гнев', 11.51665, 13.35808333333333, 12.436674999999997, 13.94829934078006, 12.993383870967753]
  ]);

  var chart = new google.charts.Line(document.getElementById('chart_div4'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}