<template>
 <div>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
        <!-- Year	Type	Taxes	Interest	City Penalty	Collection	Total
2021	Adjudication Sale Costs	$1,923.50	$0.00	$0.00	$0.00	$1,923.50
2020	Real Estate	$379.46	$53.12	$0.00	$0.00	$432.58
Adjudication Sale Costs	$175.00	$0.00	$0.00	$0.00	$175.00
2019	Real Estate	$346.00	$89.96	$0.00	$0.00	$435.96
2018	Real Estate	$352.87	$134.09	$0.00	$0.00	$486.96
2017	Real Estate	$15.94	$7.33	$0.00	$0.00	$23.27
Real Estate	$336.93	$168.47	$0.00	$0.00	$505.40
2016	Real Estate	$347.60	$215.51	$0.00	$0.00	$563.11
2015	Real Estate	$236.38	$174.92	$0.00	$0.00	$411.30
2014	Real Estate	$236.54	$203.42	$0.00	$0.00	$439.96
2013	Real Estate	$235.75	$231.04	$23.58	$46.59	$536.96
2012	Real Estate	$151.47	$166.62	$15.15	$31.66	$364.90 -->
          <v-toolbar-title>Taxes</v-toolbar-title>
        </v-toolbar>
        <v-card>
            <v-data-table 
                :headers="headers" 
                :items="costs" 
                :items-per-page="5"
                item-key="id">
                <template v-slot:item="{ item }">
                    <tr>
                        <td>{{item.year}}</td>
                        <td>{{item.name}}</td>
                        <td>{{item.cost}}</td>
                    </tr>
                </template>
                <template slot="body.append">
                    <tr class="pink--text">
                        <th class="title">Totals</th>
                        <th class="title">{{ sumField('quantity') }}</th>
                        <th class="title">{{ sumField('cost') }}</th>
                    </tr>
                </template>
            </v-data-table>
        </v-card>
  </div>
</template>

<script>
export default {
      data () {
    return {
      selected: [],
      headers: [
        {
          text: "Year",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Type", value: "year" },
        { text: "Cost", value: "cost" },
      ],
    //   currency format:
// https://stackoverflow.com/questions/43208012/how-do-i-format-currencies-in-a-vue-component
      costs: [
        {
          id: 1,
          name: "Minimum Starting Bid",
          year: 2019,
          cost: 5889,
          available: null
        },
        
      ]
    }
  },
  methods: {
    sumField(key) {
        // sum data in give key (property)
        return this.costs.reduce((a, b) => a + (b[key] || 0), 0)
    }
  }
  
};
</script>

<style>

</style>