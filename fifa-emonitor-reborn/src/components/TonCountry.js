import { Bar } from 'vue-chartjs';
import { data } from '../data/data'

export default {
  extends: Bar,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: [data.tonCountry[0][0], data.tonCountry[1][0], data.tonCountry[2][0], data.tonCountry[3][0], data.tonCountry[4][0]],
        datasets: [{
          label: 'Позитив',
          backgroundColor: '#249EBF',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#f87979',
          //Data to be represented on y-axis
          data: [data.tonCountry[0][1], data.tonCountry[1][1], data.tonCountry[2][1], data.tonCountry[3][1], data.tonCountry[4][1]]
        },
          {
            label: 'Негатив',
            backgroundColor: '#f87979',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [data.tonCountry[0][2], data.tonCountry[1][2], data.tonCountry[2][2], data.tonCountry[3][2], data.tonCountry[4][2]]
          }]
      },
      //Chart.js options that controls the appearance of the chart
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    //renderChart function renders the chart with the datacollection and options object.
    this.renderChart(this.datacollection, this.options)
  }
}
