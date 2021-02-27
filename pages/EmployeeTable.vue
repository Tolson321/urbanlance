<template>
  <div>
      <employee-table />
  </div>
</template>

<script>
import EmployeeTable from '~/components/EmployeeTable.vue'

export default {
  components: { EmployeeTable },

}
</script>

<style>
.EmployeeGraph__Wrapper {
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>