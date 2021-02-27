import { Line } from 'vue-chartjs'
import 'chartjs-plugin-colorschemes'

export default {
    
    extends: Line,

    data () {
        return {
            monthlyData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                {label: 'Data1', backgroundColor: '#0000', data: [40, 39, 31, 11, 45, 50, 34]},
                {label: 'Data2', backgroundColor: '#0000', data: [34, 40, 39, 31, 11, 45, 50]},
                {label: 'Data3', backgroundColor: '#0000', data: [50, 34, 40, 39, 31, 11, 45]},
                {label: 'Data4', backgroundColor: '#0000', data: [45, 50, 34, 40, 39, 31, 11]}
            ]},

            options: {
                plugins: {
                    colorschemes: {
                    scheme: 'tableau.Traffic9'
                    }
                },
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
                            display: false
                        }
                    }]
                },
                responsive: true,
                maintainAspectRatio: false
            }
        }
    },

    mounted () {
        this.renderChart(this.monthlyData, this.options)
    }
}
