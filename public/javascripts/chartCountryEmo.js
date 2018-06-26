google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  var chartDiv = document.getElementById('chart_div5'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        width: 800,
        height: 500,
        axes: {
          y: {
            distance: {label: '%'}, // Left y-axis.
          }
        },
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
          position: 'bottom',
          maxLines: 3,
          textStyle: {
            color: '#bcc5ca'
          }
        }
      };

  data.addColumn('string', 'Страны');
  data.addColumn('number', 'Печаль');
  data.addColumn('number', 'Радость');
  data.addColumn('number', 'Страх');
  data.addColumn('number', 'Отвращение');
  data.addColumn('number', 'Гнев');

  data.addRows([
    ['RU', 8.2163, 20.3013, 3.801, 10.47895, 11.51665],
    ['FR', 23.385125000000006, 33.04941666666667, 9.008108333333332, 15.946433333333335, 13.35808333333333],
    ['SP', 18.362299999999994, 26.638827941176473, 9.502714705882347, 20.787857352941174, 12.436674999999997],
    ['EN', 19.003794945980417, 42.08237586522642, 7.593078373924316, 14.991822834645536, 13.94829934078006],
    ['PT', 14.899969892473102, 36.666264516129026, 8.5775505376344, 15.113996774193536, 12.993383870967753]
  ]);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);

    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

    drawMaterialChart();
};
