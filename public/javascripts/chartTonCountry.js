google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuffPosNeg);

function drawStuffPosNeg() {
  var chartDiv = document.getElementById('chart_div0');

  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Страны');
  data.addColumn('number', 'Негатив');
  data.addColumn('number', 'Позитив');

  data.addRows([
    dataArray.tonCountry[0],
    dataArray.tonCountry[1],
    dataArray.tonCountry[2],
    dataArray.tonCountry[3],
    dataArray.tonCountry[4],
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