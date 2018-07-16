google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChartPie);

function drawChartPie() {
  var data = google.visualization.arrayToDataTable([
    ['Country', 'Number of tweets'],
    ['RU',     dataArray.langLength.RU],
    ['EN',      dataArray.langLength.EN],
    ['FR',  dataArray.langLength.FR],
    ['ES', dataArray.langLength.ES],
    ['PT',    dataArray.langLength.PT]
  ]);

  var options = {
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

  var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));

  chart.draw(data, options);

  google.visualization.events.addListener(chart, 'select', selectHandler);

  drawRuPol();
  drawRuEmo();

  drawEnPol();
  drawEnEmo();

  drawFrPol();
  drawFrEmo();

  drawEsPol();
  drawEsEmo();

  drawPtPol();
  drawPtEmo();

  function selectHandler() {
    var selection = chart.getSelection();

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

function drawRuPol() {
  drawStuffRU()
}
function drawEnPol() {
  drawStuffEN()
}
function drawFrPol() {
  drawStuffFR()
}
function drawEsPol() {
  drawStuffES()
}
function drawPtPol() {
  drawStuffPT()
}

function drawRuEmo() {
  drawStuffEmoRU()
}
function drawEnEmo() {
  drawStuffEmoEN()
}
function drawFrEmo() {
  drawStuffEmoFR()
}
function drawEsEmo() {
  drawStuffEmoES()
}
function drawPtEmo() {
  drawStuffEmoPT()
}

function drawStuffRU() {
  var tempObj = dataArray.langDays.RU,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].polarityPos, tempObj[key].polarityNeg])
  }




  var chartDiv = document.getElementById('chart_days_polarityRU'),
      data = new google.visualization.DataTable(),
      materialOptions = {
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Позитив');
  data.addColumn('number', 'Негатив');



  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);

    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};

function drawStuffEN() {
  var tempObj = dataArray.langDays.EN,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].polarityPos, tempObj[key].polarityNeg])
  }




  var chartDiv = document.getElementById('chart_days_polarityEN'),
      data = new google.visualization.DataTable(),
      materialOptions = {
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Позитив');
  data.addColumn('number', 'Негатив');



  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    google.visualization.events.addListener(materialChart, 'ready', hide);

    function hide() {
      $('#chart_days_polarityEN').addClass('hidden');
    }
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};



function drawStuffFR() {
  var tempObj = dataArray.langDays.FR,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].polarityPos, tempObj[key].polarityNeg])
  }

  var chartDiv = document.getElementById('chart_days_polarityFR'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        height: 300,
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Позитив');
  data.addColumn('number', 'Негатив');



  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    google.visualization.events.addListener(materialChart, 'ready', hide);

    function hide() {
      $('#chart_days_polarityFR').addClass('hidden');
    }
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};


function drawStuffES() {
  var tempObj = dataArray.langDays.ES,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].polarityPos, tempObj[key].polarityNeg])
  }

  var chartDiv = document.getElementById('chart_days_polarityES'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        height: 300,
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Позитив');
  data.addColumn('number', 'Негатив');



  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    google.visualization.events.addListener(materialChart, 'ready', hide);

    function hide() {
      $('#chart_days_polarityES').addClass('hidden');
    }
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};



function drawStuffPT() {
  var tempObj = dataArray.langDays.PT,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].polarityPos, tempObj[key].polarityNeg])
  }


  var chartDiv = document.getElementById('chart_days_polarityPT'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        height: 300,
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Позитив');
  data.addColumn('number', 'Негатив');



  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    google.visualization.events.addListener(materialChart, 'ready', hide);

    function hide() {
      $('#chart_days_polarityPT').addClass('hidden');
    }
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};


function drawStuffEmoRU() {
  var tempObj = dataArray.langDays.RU,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].emo[0], tempObj[key].emo[1],tempObj[key].emo[2],tempObj[key].emo[3],tempObj[key].emo[4],])
  }


  var chartDiv = document.getElementById('chart_days_emoRU'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        height: 300,
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Печаль');
  data.addColumn('number', 'Радость');
  data.addColumn('number', 'Страх');
  data.addColumn('number', 'Отвращение');
  data.addColumn('number', 'Гнев');

  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);

    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};

function drawStuffEmoEN() {
  var tempObj = dataArray.langDays.EN,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].emo[0], tempObj[key].emo[1],tempObj[key].emo[2],tempObj[key].emo[3],tempObj[key].emo[4],])
  }


  var chartDiv = document.getElementById('chart_days_emoEN'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        height: 300,
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Печаль');
  data.addColumn('number', 'Радость');
  data.addColumn('number', 'Страх');
  data.addColumn('number', 'Отвращение');
  data.addColumn('number', 'Гнев');

  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    google.visualization.events.addListener(materialChart, 'ready', hide);

    function hide() {
      $('#chart_days_emoEN').addClass('hidden');
    }
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};

function drawStuffEmoFR() {
  var tempObj = dataArray.langDays.FR,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].emo[0], tempObj[key].emo[1],tempObj[key].emo[2],tempObj[key].emo[3],tempObj[key].emo[4],])
  }


  var chartDiv = document.getElementById('chart_days_emoFR'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        height: 300,
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Печаль');
  data.addColumn('number', 'Радость');
  data.addColumn('number', 'Страх');
  data.addColumn('number', 'Отвращение');
  data.addColumn('number', 'Гнев');

  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    google.visualization.events.addListener(materialChart, 'ready', hide);

    function hide() {
      $('#chart_days_emoFR').addClass('hidden');
    }
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};

function drawStuffEmoES() {
  var tempObj = dataArray.langDays.ES,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].emo[0], tempObj[key].emo[1],tempObj[key].emo[2],tempObj[key].emo[3],tempObj[key].emo[4],])
  }


  var chartDiv = document.getElementById('chart_days_emoES'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        height: 300,
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Печаль');
  data.addColumn('number', 'Радость');
  data.addColumn('number', 'Страх');
  data.addColumn('number', 'Отвращение');
  data.addColumn('number', 'Гнев');

  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    google.visualization.events.addListener(materialChart, 'ready', hide);

    function hide() {
      $('#chart_days_emoES').addClass('hidden');
    }
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};

function drawStuffEmoPT() {
  var tempObj = dataArray.langDays.PT,
      tempArr = [];

  for (var key in tempObj) {
    tempArr.push([tempObj[key].date.slice(8, 10) + '.' + tempObj[key].date.slice(5, 7), tempObj[key].emo[0], tempObj[key].emo[1],tempObj[key].emo[2],tempObj[key].emo[3],tempObj[key].emo[4],])
  }

  var chartDiv = document.getElementById('chart_days_emoPT'),
      data = new google.visualization.DataTable(),
      materialOptions = {
        height: 300,
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

  data.addColumn('string', 'Дни');
  data.addColumn('number', 'Печаль');
  data.addColumn('number', 'Радость');
  data.addColumn('number', 'Страх');
  data.addColumn('number', 'Отвращение');
  data.addColumn('number', 'Гнев');

  data.addRows(tempArr);

  function drawMaterialChart() {
    var materialChart = new google.charts.Bar(chartDiv);
    google.visualization.events.addListener(materialChart, 'ready', hide);

    function hide() {
      $('#chart_days_emoPT').addClass('hidden');
    }
    materialChart.draw(data, google.charts.Bar.convertOptions(materialOptions));
  }

  drawMaterialChart();
};