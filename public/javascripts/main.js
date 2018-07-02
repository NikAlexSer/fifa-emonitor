var dataArray;

$.get('/getdata', function(data) {
  dataArray = JSON.parse(data)
  console.log(dataArray)
}).then(function () {
  $(document).ready(function() {
    $('.navbar-nav li').click(function() {
      $('.navbar-nav li').removeClass('active')
      $(this).addClass('active')
    });

    var word_list = [
      {text: dataArray.topKeywords.PT[0][0][0], weight: dataArray.topKeywords.PT[0][0][1], html: {"data-tooltip": dataArray.topKeywords.PT[0][0][1]}},

      {text: dataArray.topKeywords.ES[0][0][0], weight: dataArray.topKeywords.ES[0][0][1], html: {"data-tooltip": dataArray.topKeywords.ES[0][0][1]}},
      {text: dataArray.topKeywords.ES[0][1][0], weight: dataArray.topKeywords.ES[0][1][1], html: {"data-tooltip": dataArray.topKeywords.ES[0][1][1]}},
      {text: dataArray.topKeywords.ES[0][2][0], weight: dataArray.topKeywords.ES[0][2][1], html: {"data-tooltip": dataArray.topKeywords.ES[0][2][1]}},
      {text: dataArray.topKeywords.ES[0][3][0], weight: dataArray.topKeywords.ES[0][3][1], html: {"data-tooltip": dataArray.topKeywords.ES[0][3][1]}},
      {text: dataArray.topKeywords.ES[0][4][0], weight: dataArray.topKeywords.ES[0][4][1], html: {"data-tooltip": dataArray.topKeywords.ES[0][4][1]}},

      {text: dataArray.topKeywords.EN[0][0][0], weight: dataArray.topKeywords.EN[0][0][1], html: {"data-tooltip": dataArray.topKeywords.EN[0][0][1]}},
      {text: dataArray.topKeywords.EN[0][1][0], weight: dataArray.topKeywords.EN[0][1][1], html: {"data-tooltip": dataArray.topKeywords.EN[0][1][1]}},
      {text: dataArray.topKeywords.EN[0][2][0], weight: dataArray.topKeywords.EN[0][2][1], html: {"data-tooltip": dataArray.topKeywords.EN[0][2][1]}},
      {text: dataArray.topKeywords.EN[0][3][0], weight: dataArray.topKeywords.EN[0][3][1], html: {"data-tooltip": dataArray.topKeywords.EN[0][3][1]}},
      {text: dataArray.topKeywords.EN[0][4][0], weight: dataArray.topKeywords.EN[0][4][1], html: {"data-tooltip": dataArray.topKeywords.EN[0][4][1]}},

      {text: dataArray.topKeywords.RU[0][0][0], weight: dataArray.topKeywords.RU[0][0][1], html: {"data-tooltip": dataArray.topKeywords.RU[0][0][1]}},
      {text: dataArray.topKeywords.RU[0][1][0], weight: dataArray.topKeywords.RU[0][1][1], html: {"data-tooltip": dataArray.topKeywords.RU[0][1][1]}},
      {text: dataArray.topKeywords.RU[0][2][0], weight: dataArray.topKeywords.RU[0][2][1], html: {"data-tooltip": dataArray.topKeywords.RU[0][2][1]}},
      {text: dataArray.topKeywords.RU[0][3][0], weight: dataArray.topKeywords.RU[0][3][1], html: {"data-tooltip": dataArray.topKeywords.RU[0][3][1]}},
      {text: dataArray.topKeywords.RU[0][4][0], weight: dataArray.topKeywords.RU[0][4][1], html: {"data-tooltip": dataArray.topKeywords.RU[0][4][1]}},

      {text: dataArray.topKeywords.FR[0][0][0], weight: dataArray.topKeywords.FR[0][0][1], html: {"data-tooltip": dataArray.topKeywords.FR[0][0][1]}},
      {text: dataArray.topKeywords.FR[0][1][0], weight: dataArray.topKeywords.FR[0][1][1], html: {"data-tooltip": dataArray.topKeywords.FR[0][1][1]}},
    ];



    $("#cloud-top-words").jQCloud(word_list,
        {
          shape: "rectangular",
          autoResize: true
        });
  });
})


