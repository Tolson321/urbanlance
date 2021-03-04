<template>
  <v-app>
    <navigation :color="color" :flat="flat" />
    <v-main class="pt-0">
      <!-- <propertyOverview />
      <propertyDetails />
      <costs />
      <taxes />
      <propertyImages />
      <supportingDocs /> -->

    </v-main>
    <v-scale-transition>
      <v-btn
        fab
        v-show="fab"
        v-scroll="onScroll"
        dark
        fixed
        bottom
        right
        color="secondary"
        @click="toTop"
      >
        <v-icon>mdi-arrow-up</v-icon>
      </v-btn>
    </v-scale-transition>
    <foote />
  </v-app>
</template>

<style scoped>
.v-main {
  background-image: url("~@/assets/img/bgHero.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}
</style>

      <propertyOverview />
      <propertyDetails />
      <costs />
      <taxes />
      <propertyImages />
      <supportingDocs />
<script>
import navigation from '~/components/Navigation';
import foot from '~/components/home/Footer';
// import propertyOverview from '~/components/UserProperty/propertyOverview';
// import propertyDetails from '~/components/UserProperty/propertyDetails';
// import costs from '~/components/UserProperty/costs';
// import taxes from '~/components/UserProperty/taxes';
// import propertyImages from '~/components/UserProperty/propertyImages';
// import supportingDocs from '~/components/UserProperty/supportingDocs';



export default {
  name: "App",

  components: {
    navigation,
    foot,
    // propertyOverview,
    // propertyDetails,
    // costs,
    // taxes,
    // propertyImages,
    // supportingDocs,
  },

  data: () => ({
    fab: null,
    color: "",
    flat: null,
  }),

  watch: {
    fab(value) {
      if (value) {
        this.color = "secondary";
        this.flat = false;
      } else {
        this.color = "transparent";
        this.flat = true;
      }
    },
  },

  methods: {
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 60;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
  },
};
</script>
