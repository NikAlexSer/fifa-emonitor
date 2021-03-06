google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
  let chartDiv = document.getElementById('chart_div5'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        width: 575,
        height: 500,
        axes: {
          y: {
            distance: {label: '%'}, // Left y-axis.
          }
        },
        backgroundColor: {
          fill: '#F4F4F4',
          opacity: 0
        },
        hAxis: {
          textStyle: {
            color: '#646464'
          }
        },
        vAxis: {
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

  data.addColumn('string', 'Страны');
  data.addColumn('number', 'Печаль');
  data.addColumn('number', 'Радость');
  data.addColumn('number', 'Страх');
  data.addColumn('number', 'Отвращение');
  data.addColumn('number', 'Гнев');

  data.addRows([
    dataArray.countryEmo.RU,
    dataArray.countryEmo.EN,
    dataArray.countryEmo.ES,
    dataArray.countryEmo.PT,
    dataArray.countryEmo.FR
  ]);

  function drawMaterialChart() {
    let materialChart = new google.charts.Bar(chartDiv);

    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};
