google.charts.load('current', {'packages':['line']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = new google.visualization.DataTable(),
      options = {
        width: 800,
        height: 500,
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
          textStyle: {
            color: '#646464'
          }
        }
      };

  data.addColumn('string', '');
  data.addColumn('number', 'RU');
  data.addColumn('number', 'FR');
  data.addColumn('number', 'SP');
  data.addColumn('number', 'EN');
  data.addColumn('number', 'PT');


  dataArray.countryEmo.RU[1]
  data.addRows([
    ['Печаль', dataArray.countryEmo.RU[1], dataArray.countryEmo.FR[1], dataArray.countryEmo.PT[1], dataArray.countryEmo.ES[1], dataArray.countryEmo.EN[1]],
    ['Радость', dataArray.countryEmo.RU[2], dataArray.countryEmo.FR[2], dataArray.countryEmo.PT[2], dataArray.countryEmo.ES[2], dataArray.countryEmo.EN[2]],
    ['Страх', dataArray.countryEmo.RU[3], dataArray.countryEmo.FR[3], dataArray.countryEmo.PT[3], dataArray.countryEmo.ES[3], dataArray.countryEmo.EN[3]],
    ['Отвращение', dataArray.countryEmo.RU[4], dataArray.countryEmo.FR[4], dataArray.countryEmo.PT[4], dataArray.countryEmo.ES[41], dataArray.countryEmo.EN[4]],
    ['Гнев', dataArray.countryEmo.RU[5], dataArray.countryEmo.FR[5], dataArray.countryEmo.PT[5], dataArray.countryEmo.ES[5], dataArray.countryEmo.EN[5]]
  ]);

  var chart = new google.charts.Line(document.getElementById('chart_div4'));

  chart.draw(data, google.charts.Line.convertOptions(options));
}