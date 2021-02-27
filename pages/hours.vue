<template>
  <div>
      <employee-graph />
  </div>
</template>

<script>
import EmployeeGraph from '~/components/EmployeeGraph/EmployeeGraph.vue'
export default {
  components: { EmployeeGraph },

}
</script>

<style>
.EmployeeGraph__Wrapper {
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>