const MongoClient = require('mongodb').MongoClient,
      uri = "mongodb+srv://admin:1234@cluster0-ccstx.mongodb.net/test?retryWrites=true",
      fs = require('fs');

var settings = {
    reconnectTries : Number.MAX_VALUE,
    autoReconnect : true,
    auto_reconnect: true
};

var dataArray = {
      tonCountry: [],
      langLength: {
        RU: 0,
        EN: 0,
        ES: 0,
        FR: 0,
        PT: 0,
      },
      topKeywords: {
        RU: [],
        EN: [],
        ES: [],
        FR: [],
        PT: [],
      },
      countryEmo: {
        RU: [],
        EN: [],
        ES: [],
        FR: [],
        PT: [],
      }
    };



MongoClient.connect(uri, settings, function(err, client) {
  if(err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
  } else {
    console.log('Connected...');
  }

  var cursorRu = client.db('worldcup2018_release').collection('fifa2018_with_keywords').find({language: "ru"})
  collectTweets("RU", cursorRu)
  var cursorEn = client.db('worldcup2018_release').collection('fifa2018_with_keywords').find({language: "en"})
  collectTweets("EN", cursorEn)
  var cursorFr = client.db('worldcup2018_release').collection('fifa2018_with_keywords').find({language: "fr"})
  collectTweets("FR", cursorFr)
  var cursorEs = client.db('worldcup2018_release').collection('fifa2018_with_keywords').find({language: "es"})
  collectTweets("ES", cursorEs)
  var cursorPt = client.db('worldcup2018_release').collection('fifa2018_with_keywords').find({language: "pt"})
  collectTweets("PT", cursorPt)

});

async function collectTweets(lang, cursor) {
  let tweets = await cursor.toArray();

  if (tweets.length > 0) {
    var polarityPos = 0, polarityNeg = 0;
    var countPos = 0, countNeg = 0;
    tweets.forEach(function(item) {
      if (item.polarity > 0) {
        polarityPos += +item.polarity;
        countPos += 1
      } else {
        polarityNeg += Math.abs(+item.polarity);
        countNeg += 1
      }
    });

    polarityPos = polarityPos / countPos * 100;
    polarityNeg = polarityNeg / countNeg * 100;
    console.log(lang, polarityPos, polarityNeg);
    dataArray.tonCountry.push([lang, polarityPos, polarityNeg])


    var allKeywords = []
    tweets.forEach(function(item) {
      if (item.hasOwnProperty('keywords')) {
        item.keywords.forEach(function (elem) {
          allKeywords.push(elem.text)
        })
      }
    });

    var a = [], b = [], prev;
    var keys = {}
    allKeywords.sort();
    for ( var i = 0; i < allKeywords.length; i++ ) {
      if ( allKeywords[i] !== prev ) {
        a.push(allKeywords[i]);
        b.push(1);
        keys[allKeywords[i]] = 1
      } else {
        b[b.length-1]++;
        keys[allKeywords[i]] += 1
      }
      prev = allKeywords[i];
    }

    for (var key in keys) {
      if (keys[key] === 1 || keys[key] === 2 || keys[key] === 3 || keys[key] === 4 || keys[key] === 5) {
        delete keys[key]
      }
    }

    var sortable = [];
    for (var key in keys) {
      sortable.push([key, keys[key]]);
    }

    sortable.sort(function(a, b) {
      return a[1] - b[1];
    });
    console.log(sortable.slice(-5))

    dataArray.topKeywords[lang].push(sortable.slice(-5))
    dataArray.langLength[lang] = tweets.length



    var emo = {sadness: 0, joy: 0, fear: 0, disgust: 0, anger: 0};
    var count = 0;
    tweets.forEach(function(item) {
      if (item.hasOwnProperty('keywords')) {
        item.keywords.forEach(function (elem) {
          if (elem.hasOwnProperty('emotion')) {
            count++;
            if (elem.emotion.sadness) {
              emo.sadness += +elem.emotion.sadness
            }
            if (elem.emotion.joy) {
              emo.joy += +elem.emotion.joy
            }
            if (elem.emotion.fear) {
              emo.fear += +elem.emotion.fear
            }
            if (elem.emotion.disgust) {
              emo.disgust += +elem.emotion.disgust
            }
            if (elem.emotion.anger) {
              emo.anger += +elem.emotion.anger
            }
          }
        })
      }
    });

    emo.sadness = emo.sadness / count * 100
    emo.joy = emo.joy / count * 100
    emo.fear = emo.fear / count * 100
    emo.disgust = emo.disgust / count * 100
    emo.anger = emo.anger / count * 100

    dataArray.countryEmo[lang].push(lang, emo.sadness, emo.joy, emo.fear, emo.disgust, emo.anger)
  }



  console.log(dataArray)

  fs.writeFileSync('../data/data.json', JSON.stringify(dataArray))


  if (dataArray.langLength['RU'] !== 0 && dataArray.langLength['FR'] !== 0 && dataArray.langLength['EN'] !== 0 && dataArray.langLength['PT'] !== 0 && dataArray.langLength['ES'] !== 0) {
    process.exit()
  }
}
