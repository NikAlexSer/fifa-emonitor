google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterialRu);

function drawMaterialRu() {
  var chartDiv = document.getElementById('chart-topkeywords-ru');

  var data = google.visualization.arrayToDataTable([
    ['RU', 'Количество'],
    dataArray.topKeywords.RU[0][0],
    dataArray.topKeywords.RU[0][1],
    dataArray.topKeywords.RU[0][2],
    dataArray.topKeywords.RU[0][3],
    dataArray.topKeywords.RU[0][4]
  ]);

  var materialOptions = {
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
    },
    colors: ['red']
  };
  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterialEn);

function drawMaterialEn() {
  var chartDiv = document.getElementById('chart-topkeywords-en');

  var data = google.visualization.arrayToDataTable([
    ['EN', 'Количество'],
    dataArray.topKeywords.EN[0][0],
    dataArray.topKeywords.EN[0][1],
    dataArray.topKeywords.EN[0][2],
    dataArray.topKeywords.EN[0][3],
    dataArray.topKeywords.EN[0][4]
  ]);

  var materialOptions = {
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
    },
    colors: ['green']
  };
  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterialFr);

function drawMaterialFr() {
  var chartDiv = document.getElementById('chart-topkeywords-fr');

  var data = google.visualization.arrayToDataTable([
    ['FR', 'Количество'],
    dataArray.topKeywords.FR[0][0],
    dataArray.topKeywords.FR[0][1],
    dataArray.topKeywords.FR[0][2],
    dataArray.topKeywords.FR[0][3],
    dataArray.topKeywords.FR[0][4],
  ]);

  var materialOptions = {
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
    },
    colors: ['blue']
  };
  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterialPt);

function drawMaterialPt() {
  var chartDiv = document.getElementById('chart-topkeywords-pt');

  var data = google.visualization.arrayToDataTable([
    ['PT', 'Количество'],
    dataArray.topKeywords.PT[0][0],
    dataArray.topKeywords.PT[0][1],
    dataArray.topKeywords.PT[0][2],
    dataArray.topKeywords.PT[0][3],
    dataArray.topKeywords.PT[0][4],
  ]);

  var materialOptions = {
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
    },
    colors: ['pink']
  };
  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
}

google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMaterialEs);

function drawMaterialEs() {
  var chartDiv = document.getElementById('chart-topkeywords-es');

  var data = google.visualization.arrayToDataTable([
    ['ES', 'Количество'],
    dataArray.topKeywords.ES[0][0],
    dataArray.topKeywords.ES[0][1],
    dataArray.topKeywords.ES[0][2],
    dataArray.topKeywords.ES[0][3],
    dataArray.topKeywords.ES[0][4]
  ]);

  var materialOptions = {
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
    },
    colors: ['yellow']
  };
  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
}