import { Radar } from 'vue-chartjs';
import { data } from '../data/data'

export default {
  extends: Radar,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: [data.topKeywords.RU[0][0][0], data.topKeywords.RU[0][1][0], data.topKeywords.RU[0][2][0], data.topKeywords.RU[0][3][0], data.topKeywords.RU[0][4][0]],
        datasets: [{
          label: 'RU',
          backgroundColor: 'rgba(244, 180, 0, 0.5)',
          pointBackgroundColor: 'white',
          borderWidth: 5,
          pointBorderColor: '#f87979',
          //Data to be represented on y-axis
          data: [data.topKeywords.RU[0][0][1], data.topKeywords.RU[0][1][1], data.topKeywords.RU[0][2][1], data.topKeywords.RU[0][3][1], data.topKeywords.RU[0][4][1]]
        }]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            display: false,
          }],
          xAxes: [{
            display: false,
          }]
        },
        legend: {
          display: true,
          position: 'bottom'
        },
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
