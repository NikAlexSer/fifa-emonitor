import { HorizontalBar } from 'vue-chartjs';
import { data } from '../data/data'

export default {
  extends: HorizontalBar,
  data() {
    return {
      datacollection: {
        //Data to be represented on x-axis
        labels: [data.countryEmo.RU[0], data.countryEmo.EN[0], data.countryEmo.ES[0], data.countryEmo.FR[0], data.countryEmo.PT[0]],
        datasets: [{
          label: 'Печаль',
          backgroundColor: 'rgb(66, 133, 244)',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#f87979',
          //Data to be represented on y-axis
          data: [data.countryEmo.RU[1], data.countryEmo.EN[1], data.countryEmo.ES[1], data.countryEmo.FR[1], data.countryEmo.PT[1]]
        },
          {
            label: 'Радость',
            backgroundColor: 'rgb(219, 68, 55)',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#f87979',
            //Data to be represented on y-axis
            data: [data.countryEmo.RU[2], data.countryEmo.EN[2], data.countryEmo.ES[2], data.countryEmo.FR[2], data.countryEmo.PT[2]]
          },
          {
            label: 'Страх',
            backgroundColor: 'rgb(244, 180, 0)',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#f87979',
            //Data to be represented on y-axis
            data: [data.countryEmo.RU[3], data.countryEmo.EN[3], data.countryEmo.ES[3], data.countryEmo.FR[3], data.countryEmo.PT[3]]
          },
          {
            label: 'Отвращение',
            backgroundColor: 'rgb(15, 157, 88)',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#f87979',
            //Data to be represented on y-axis
            data: [data.countryEmo.RU[4], data.countryEmo.EN[4], data.countryEmo.ES[4], data.countryEmo.FR[4], data.countryEmo.PT[4]]
          },
          {
            label: 'Гнев',
            backgroundColor: 'rgb(171, 71, 188)',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#f87979',
            //Data to be represented on y-axis
            data: [data.countryEmo.RU[5], data.countryEmo.EN[5], data.countryEmo.ES[5], data.countryEmo.FR[5], data.countryEmo.PT[5]]
          },]
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
