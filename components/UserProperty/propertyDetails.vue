<template>
 <div>
        <v-toolbar
          class="mb-2"
          color="indigo darken-5"
          dark
          flat
        >
          <v-toolbar-title>Property Specifications</v-toolbar-title>
        </v-toolbar>
        <v-card>
            <v-data-table 
                :headers="headers" 
                :items="costs" 
                item-key="id">
                <template v-slot:item="{ item }">
                    <tr>
                        <td>{{item.name}}</td>
                        <td>{{item.parcel}}</td>
                        <td>{{item.owner}}</td>
                        <td>{{item.address}}</td>
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
        { text: "Parcel Number", value: "parcel" },
        { text: "owner", value: "owner" },
        { text: "Address", value: "address" },

      ],
            costs: [
        {
          id: 1,
          name: "Lot Number: 0 61 Frontage: 40 Depth: 120",
          parcel: 198907896,
          owner: "house of love llc",
          address: "194 Broadway Providence RI 02903",
          available: true
        },
      ]
    }
  },
  methods: {
    
  }
  
};
</script>

<style>

</style>