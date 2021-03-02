<template>
  <section id="download">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col sm="4" class="hidden-xs-only">
              <img src="@/assets/img/ill2.svg" class="d-block ml-auto mr-auto" max-width="350px" />
            </v-col>
            <v-col cols="12" sm="8" class="white--text text-left">
              <h1 class="font-weight-light display-2 mb-2">Sustainable Cities</h1>
              <h1 class="font-weight-light">
                Any city can join our coalition to build more sustainable cities, insuring tax revenues are gathered. Our simple easy to use software keeps track of your property's progress and markets investments to stop urban decay. A new image just in time supporting civic development and cultural renaissance. 
              </h1>
              <v-btn rounded outlined href="/login" target="_blank" large color="white" class="mt-4 text--upercase v-ripple">
                <v-icon class="mr-2">
                  mdi-bus-school
                </v-icon>
                request demo
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#download {
  background-image: url("~@/assets/img/bgDownload.jpg");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 500px;
}

#download .container,
#download .row {
  height: 100%;
}
</style>