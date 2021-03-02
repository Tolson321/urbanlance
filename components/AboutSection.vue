<template>
  <section id="about">
    <v-container fluid>
      <v-row align="center" justify="center">
        <v-col cols="10">
          <v-row align="center" justify="center">
            <v-col cols="12" md="7">
              <h1 class="font-weight-light black--text display-2">About Tax Auctions</h1>
              <h1 class="font-weight-light black--text display-1 mb-3">
                Why tax liens?
              </h1>
              <v-row>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/icon1.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="black--text text-justify">
                    A tax lien is a legal claim against the assets of an individual or business that fails to pay taxes owed to the government. Once or more times a year municipalities put their tax delinquencies up for sale for you to buy.
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon2.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="black--text text-justify">
                    Our auctions allow cities to ensure delinquent tax debts are paid balancing their budgets. In most cities the investor is given a 10% or more interest on the loan and a time period which you as the investor can request your money back with interest from the owner. 
                  </p>
                </v-col>
                <v-col cols="12" class="d-flex align-center">
                  <v-img
                    src="@/assets/img/icon3.svg"
                    max-width="60px"
                    class="mr-4"
                  />
                  <p class="black--text text-justify">
                    Tax sales last hours or span multiple days. Each listing is available for bid and trackable from your profile. 
                  </p>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="5" class="d-none d-md-flex">
              <img
                src="@/assets/img/ill1.svg"
                class="d-block ml-auto mr-auto"
                max-width="400px"
              />
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
#about {
  background-color: #f4f7f5;
}
</style>
