import { Line } from 'vue-chartjs'
import 'chartjs-plugin-colorschemes'

export default {
    
    extends: Line,

    data () {
        return {            
            dailyData: {
                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                datasets: [
                {label: 'Data1', backgroundColor: '#0000', data: [8, 5, 9, 1, 4, 5, 4]},
                {label: 'Data2', backgroundColor: '#0000', data: [3, 4, 3, 3, 8, 5, 5]},
                {label: 'Data3', backgroundColor: '#0000', data: [7, 3, 6, 4, 2, 7, 8]},
                {label: 'Data4', backgroundColor: '#0000', data: [1, 0, 10, 15, 2, 3, 4]}
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
        this.renderChart(this.dailyData, this.options)
    }
}
