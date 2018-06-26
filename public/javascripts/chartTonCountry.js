google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuffPosNeg);

function drawStuffPosNeg() {
  var chartDiv = document.getElementById('chart_div0');

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Страны');
  data.addColumn('number', 'Негатив');
  data.addColumn('number', 'Позитив');

  data.addRows([
    [ 'RU', 79.62555092574772, 36.423424325788343 ],
    [ 'FR', 91.48721034809721, 67.0857034060875 ],
    [ 'SP', 66.48267811876455, 25.954613225788343 ],
    [ 'EN', 80.68276798555178, 49.23423562365778 ],
    [ 'PT', 66.62523013251132, 33.29751821765778 ],
  ]);

  var materialOptions = {
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


  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};