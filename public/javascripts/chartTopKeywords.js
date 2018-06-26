google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterial);

function drawMaterial() {
  var chartDiv = document.getElementById('chart_div2');

  var data = google.visualization.arrayToDataTable([
    ['Word', 'Counts'],
    ['world cup trophy', 16],
    ['youtube video fifa', 34],
    ['fifa world cup', 57],
    ['biggest sporting event', 23],
    ['pura vida fifa', 41]
  ]);

  var materialOptions = {
    width: 800,
    height: 200,
    hAxis: {
      textStyle: {
        color: '#bcc5ca'
      }
    },
    bars: 'horizontal',
    backgroundColor: {
      fill: '#171b23',
      opacity: 100
    },
    vAxis: {
      textStyle: {
        color: '#bcc5ca'
      }
    },
    legend: {
      position: 'none'
    }
  };
  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
}