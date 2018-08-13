google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuffPosNeg);

function drawStuffPosNeg() {
  let chartDiv = document.getElementById('chart_div0'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        height: 500,
        axes: {
          y: {
            distance: {label: '%'}, // Left y-axis.
          }
        },
        backgroundColor: {
          fill: '#F4F4F4',
          opacity: 10
        },
        hAxis: {
          textStyle: {
            color: '#646464'
          }
        },
        vAxis: {
          title: 'Тональность в %',
          textStyle: {
            color: '#646464'
          }
        },
        legend: {
          position: 'bottom',
          maxLines: 3,
          textStyle: {
            color: '#646464'
          }
        }
      };

  data.addColumn('string', 'Языки');
  data.addColumn('number', 'Позитив');
  data.addColumn('number', 'Негатив');
  data.addRows([
    dataArray.tonCountry[0],
    dataArray.tonCountry[1],
    dataArray.tonCountry[2],
    dataArray.tonCountry[3],
    dataArray.tonCountry[4],
  ]);

  function drawMaterialChart() {
    let materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};