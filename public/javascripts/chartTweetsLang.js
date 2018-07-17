google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChartPie);

function drawChartPie() {
  let data = google.visualization.arrayToDataTable([
    ['Country', 'Number of tweets'],
    ['RU',     dataArray.langLength.RU],
    ['EN',      dataArray.langLength.EN],
    ['FR',  dataArray.langLength.FR],
    ['ES', dataArray.langLength.ES],
    ['PT',    dataArray.langLength.PT]
  ]);

  let options = {
    height: 500,
    backgroundColor: {
      fill: '#F4F4F4',
      opacity:0
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

  let chart = new google.visualization.PieChart(document.getElementById('chart_div1'));

  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'select', selectHandler);

  drawStuff('RU')
  drawStuffEmo('RU');

  drawStuff('EN')
  drawStuffEmo('EN');

  drawStuff('FR')
  drawStuffEmo('FR');

  drawStuff('ES')
  drawStuffEmo('ES');

  drawStuff('PT')
  drawStuffEmo('PT');

  function selectHandler() {
    let selection = chart.getSelection();

    if (selection[0]) {
      let $dayspolar = $('.dayspolar'),
          $daysemo = $('.daysemo');

      switch (selection[0].row) {
        case 0:
          $dayspolar.addClass('hidden');
          $('#chart_days_polarityRU').removeClass('hidden');
          $daysemo.addClass('hidden');
          $('#chart_days_emoRU').removeClass('hidden');
          break;
        case 1:
          $dayspolar.addClass('hidden');
          $('#chart_days_polarityEN').removeClass('hidden');
          $daysemo.addClass('hidden');
          $('#chart_days_emoEN').removeClass('hidden');
          break;
        case 2:
          $dayspolar.addClass('hidden');
          $('#chart_days_polarityFR').removeClass('hidden');
          $daysemo.addClass('hidden');
          $('#chart_days_emoFR').removeClass('hidden');
          break;
        case 3:
          $dayspolar.addClass('hidden');
          $('#chart_days_polarityES').removeClass('hidden');
          $daysemo.addClass('hidden');
          $('#chart_days_emoES').removeClass('hidden');
          break;
        case 4:
          $dayspolar.addClass('hidden');
          $('#chart_days_polarityPT').removeClass('hidden');
          $daysemo.addClass('hidden');
          $('#chart_days_emoPT').removeClass('hidden');
          break;
      }
    }

  }
}

let stuffMaterialOptions = {
  height: 300,
  width: '100%',
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
    title: 'Доля сообщений, в %',
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

function drawStuff(lang) {
  let tempObj = dataArray.langDays[lang],
      tempArr = [];

  for (let key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].polarityPos, tempObj[key].polarityNeg])
  }

  let chartDiv = document.getElementById('chart_days_polarity' + lang),
      data = new google.visualization.DataTable();

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Позитив');
  data.addColumn('number', 'Негатив');
  data.addRows(tempArr);

  function drawMaterialChart() {
    let materialChart = new google.charts.Bar(chartDiv);

    if (lang !== 'RU') {
      google.visualization.events.addListener(materialChart, 'ready', hide);

      function hide() {
        $('#chart_days_polarity' + lang).addClass('hidden');
      }
    }

    materialChart.draw(data, google.charts.Bar.convertOptions(stuffMaterialOptions));
  }

  drawMaterialChart();
}

function drawStuffEmo(lang) {
  let tempObj = dataArray.langDays[lang],
      tempArr = [];

  for (let key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].emo[0], tempObj[key].emo[1],tempObj[key].emo[2],tempObj[key].emo[3],tempObj[key].emo[4],])
  }

  let chartDiv = document.getElementById('chart_days_emo' + lang),
      data = new google.visualization.DataTable();

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Печаль');
  data.addColumn('number', 'Радость');
  data.addColumn('number', 'Страх');
  data.addColumn('number', 'Отвращение');
  data.addColumn('number', 'Гнев');
  data.addRows(tempArr);

  function drawMaterialChart() {
    let materialChart = new google.charts.Bar(chartDiv);

    if (lang !== 'RU') {
      google.visualization.events.addListener(materialChart, 'ready', hide);

      function hide() {
        $('#chart_days_emo' + lang).addClass('hidden');
      }
    }
    materialChart.draw(data, google.charts.Bar.convertOptions(stuffMaterialOptions));
  }

  drawMaterialChart();
}
