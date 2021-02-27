<template>
    <div class="EmployeeGraph__Wrapper">
        <h2>Employee Hours Data</h2>
        <br>
        <div class="row">
            <div class="col-md-12">
                <monthly-chart v-if="showMonthly" />
                <daily-chart v-if="showDaily" />
                <br>
                <v-btn                   
                  depressed
                  color="indigo" 
                  @click="setMonthly">Monthly</v-btn>
                <v-btn       
                    depressed
                    color="primary" 
                    @click="setDaily">Daily</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import MonthlyChart from './MonthlyChart'
import DailyChart from './DailyChart'

export default {
    components: {
        'monthly-chart': MonthlyChart,
        'daily-chart': DailyChart
    },

    data () {
        return {
            showDaily: true,
            showMonthly: false
        }
    },

    methods: {
        setDaily () {
            this.showDaily = true,
            this.showMonthly = false
        },

        setMonthly () {
            this.showDaily = false,
            this.showMonthly = true
        }
},

}
</script>

<style>

</style>