<template>
  <div id="app">
    <wordcloud
            :data="defaultWords"
            nameKey="name"
            valueKey="value">
    </wordcloud>
  </div>
</template>

<script>
  import Vue from 'vue';
  import wordcloud from 'vue-wordcloud'
  import { data } from '../data/data'

  export default Vue.extend({
    name: 'app',
    components: {
      wordcloud
    },
    data() {
      return {
        defaultWords: [
          {name: data.topKeywords.PT[0][0][0], value: data.topKeywords.PT[0][0][1]},
          {name: data.topKeywords.PT[0][1][0], value: data.topKeywords.PT[0][1][1]},
          {name: data.topKeywords.PT[0][2][0], value: data.topKeywords.PT[0][2][1]},
          {name: data.topKeywords.PT[0][3][0], value: data.topKeywords.PT[0][3][1]},
          {name: data.topKeywords.PT[0][4][0], value: data.topKeywords.PT[0][4][1]},

          {name: data.topKeywords.ES[0][0][0], value: data.topKeywords.ES[0][0][1]},
          {name: data.topKeywords.ES[0][1][0], value: data.topKeywords.ES[0][1][1]},
          {name: data.topKeywords.ES[0][2][0], value: data.topKeywords.ES[0][2][1]},
          {name: data.topKeywords.ES[0][3][0], value: data.topKeywords.ES[0][3][1]},
          {name: data.topKeywords.ES[0][4][0], value: data.topKeywords.ES[0][4][1]},

          {name: data.topKeywords.EN[0][0][0], value: data.topKeywords.EN[0][0][1]},
          {name: data.topKeywords.EN[0][1][0], value: data.topKeywords.EN[0][1][1]},
          {name: data.topKeywords.EN[0][2][0], value: data.topKeywords.EN[0][2][1]},
          {name: data.topKeywords.EN[0][3][0], value: data.topKeywords.EN[0][3][1]},
          {name: data.topKeywords.EN[0][4][0], value: data.topKeywords.EN[0][4][1]},

          {name: data.topKeywords.RU[0][0][0], value: data.topKeywords.RU[0][0][1]},
          {name: data.topKeywords.RU[0][1][0], value: data.topKeywords.RU[0][1][1]},
          {name: data.topKeywords.RU[0][2][0], value: data.topKeywords.RU[0][2][1]},
          {name: data.topKeywords.RU[0][3][0], value: data.topKeywords.RU[0][3][1]},
          {name: data.topKeywords.RU[0][4][0], value: data.topKeywords.RU[0][4][1]},

          {name: data.topKeywords.FR[0][0][0], value: data.topKeywords.FR[0][0][1]},
          {name: data.topKeywords.FR[0][1][0], value: data.topKeywords.FR[0][1][1]},
          {name: data.topKeywords.FR[0][2][0], value: data.topKeywords.FR[0][2][1]},
          {name: data.topKeywords.FR[0][3][0], value: data.topKeywords.FR[0][3][1]},
          {name: data.topKeywords.FR[0][4][0], value: data.topKeywords.FR[0][4][1]},
        ]
      }
    }
  })
</script>
