<template>
 <div>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
          <v-toolbar-title>Costs</v-toolbar-title>
        </v-toolbar>
        <v-card>
            <v-data-table 
                :headers="headers" 
                :items="costs" 
                :items-per-page="5"
                item-key="id">
                <template v-slot:item="{ item }">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>{{item.quantity}}</td>
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
          text: "Description",
          align: "left",
          sortable: false,
          value: "name"
        },
        { text: "Quantity", value: "quantity" },
        { text: "Cost", value: "cost" },
      ],
    //   currency format:
// https://stackoverflow.com/questions/43208012/how-do-i-format-currencies-in-a-vue-component
      costs: [
        {
          id: 1,
          name: "Preliminary Property Verification Research",
          quantity: 1,
          cost: 6.0,
          available: true
        },
        {
          id: 2,
          name: "Sale Sign",
          quantity: 1,
          cost: 9.0,
          available: null
        },
        {
          id: 3,
          name: "30-Year Title Abstract",
          quantity: 1,
          cost: 16.0,
          available: null
        },
                {
          id: 4,
          name: "Attorney Title Examination Report",
          quantity: 1,
          cost: 275,
          available: null
        },
                {
          id: 5,
          name: "Legally Compliant Certified Notice",
          quantity: 7,
          cost: 259,
          available: null
        },
                {
          id: 6,
          name: "Advertisement",
          quantity: 1,
          cost: 150,
          available: null
        },
                {
          id: 7,
          name: "General Notice",
          quantity: 1,
          cost: 150,
          available: null
        },
                {
          id: 8,
          name: "Constructive Notice Sign",
          quantity: 1,
          cost: 75,
          available: null
        },
                {
          id: 9,
          name: "Property Inspection",
          quantity: 1,
          cost: 260,
          available: null
        },
                {
          id: 10,
          name: "Notary Service",
          quantity: 1,
          cost: 198,
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