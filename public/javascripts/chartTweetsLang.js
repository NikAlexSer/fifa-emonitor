google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChartPie);

function drawChartPie() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Number of tweets'],
    ['RU',     1017],
    ['EN',      2389],
    ['FR',  257],
    ['SP', 570],
    ['PT',    340]
  ]);

  var options = {
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
      position: 'bottom',
      maxLines: 3,
      textStyle: {
        color: '#bcc5ca'
      }
    }
  };

  var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));

  chart.draw(data, options);
}
