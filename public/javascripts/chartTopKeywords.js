google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterialRu);
google.charts.setOnLoadCallback(drawMaterialEn);
google.charts.setOnLoadCallback(drawMaterialFr);
google.charts.setOnLoadCallback(drawMaterialPt);
google.charts.setOnLoadCallback(drawMaterialEs);

let materialOptions = {
  height: 200,
  hAxis: {
    title: 'Количество',
    textStyle: {
      color: '#646464'
    }
  },
  bars: 'horizontal',
  backgroundColor: {
    fill: '#F4F4F4',
    opacity: 0
  },
  vAxis: {
    textStyle: {
      color: '#646464'
    }
  },
  legend: {
    position: 'none'
  },
  colors: ['red']
};


function drawMaterialRu() {
  let chartDiv = document.getElementById('chart-topkeywords-ru'),
      data = google.visualization.arrayToDataTable([
        ['RU', 'Количество'],
        dataArray.topKeywords.RU[0][0],
        dataArray.topKeywords.RU[0][1],
        dataArray.topKeywords.RU[0][2],
        dataArray.topKeywords.RU[0][3],
        dataArray.topKeywords.RU[0][4]
      ]);

  materialOptions.colors = ['red'];

  function drawMaterialChart() {
    let materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }
  drawMaterialChart();
}

function drawMaterialEn() {
  let chartDiv = document.getElementById('chart-topkeywords-en'),
      data = google.visualization.arrayToDataTable([
        ['EN', 'Количество'],
        dataArray.topKeywords.EN[0][0],
        dataArray.topKeywords.EN[0][1],
        dataArray.topKeywords.EN[0][2],
        dataArray.topKeywords.EN[0][3],
        dataArray.topKeywords.EN[0][4]
      ]);

  materialOptions.colors = ['green'];

  function drawMaterialChart() {
    let materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }
  drawMaterialChart();
}

function drawMaterialFr() {
  let chartDiv = document.getElementById('chart-topkeywords-fr'),
      data = google.visualization.arrayToDataTable([
        ['FR', 'Количество'],
        dataArray.topKeywords.FR[0][0],
        dataArray.topKeywords.FR[0][1],
        dataArray.topKeywords.FR[0][2],
        dataArray.topKeywords.FR[0][3],
      ]);

  materialOptions.colors = ['blue'];

  function drawMaterialChart() {
    let materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }
  drawMaterialChart();
}

function drawMaterialPt() {
  let chartDiv = document.getElementById('chart-topkeywords-pt'),
      data = google.visualization.arrayToDataTable([
        ['PT', 'Количество'],
        dataArray.topKeywords.PT[0][0],
        dataArray.topKeywords.PT[0][1],
        dataArray.topKeywords.PT[0][2],
        dataArray.topKeywords.PT[0][3],
        dataArray.topKeywords.PT[0][4],
      ]);

  materialOptions.colors = ['pink'];

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
}

function drawMaterialEs() {
  let chartDiv = document.getElementById('chart-topkeywords-es'),
      data = google.visualization.arrayToDataTable([
        ['ES', 'Количество'],
        dataArray.topKeywords.ES[0][0],
        dataArray.topKeywords.ES[0][1],
        dataArray.topKeywords.ES[0][2],
        dataArray.topKeywords.ES[0][3],
        dataArray.topKeywords.ES[0][4]
      ]);

  materialOptions.colors = ['yellow'];

  function drawMaterialChart() {
    let materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
}