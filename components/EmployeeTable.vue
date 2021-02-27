<template>
    <div>
        <v-data-table
        :items="employees"
        :headers="headers"
        :items-per-page="5"
        />
    </div>
</template>

<script>
export default {
    data () {
        return {
            headers: [
                { text: 'Employee', align: 'start', value: 'name' },
                { text: 'Progress Bar', value: 'progress' },
                { text: 'Work Remaining (weeks)', value: 'weeksLeft' },
                { text: 'Date Hours Run Out', value: 'noHoursDate' },
            ],

            employees: [
                //   today: sunday july 11 2021
                {name: 'Ayesha', progress: 85, weeksLeft: 7.5, noHoursDate: "September 7, 2021"},
                {name: 'Carl', progress: 63, weeksLeft: 18.5, noHoursDate: "November 23, 2021"},
                {name: 'Mary Lynn', progress: 50, weeksLeft: 25, noHoursDate: "January 9, 2022"},
                {name: 'Damien', progress: 73, weeksLeft: 13.5, noHoursDate: "October 19, 2021"},
            ]
        }
    }

}
</script>

<style>

</style>