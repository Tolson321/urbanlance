<template>
  <v-app dark>
    <v-navigation-drawer
      color="#0d354c"
      v-model="drawer"
      :clipped="clipped"
      fixed
      app 
    >

      <v-list>
       <v-list-item>
          <v-img
              src="/hubzone-200px.png">
          </v-img>
       </v-list-item>
       <v-list-item>
         <h3>Time Watcher</h3>
       </v-list-item>
        <v-list-item
          color="#94c3e7"
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      color="#0d354c"
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
            <v-spacer />

      <!-- <div v-if="$auth.loggedIn">
        {{ $auth.user.email }}
        <v-btn text @click="$auth.logout()">Logout</v-btn>
      </div>
      <div v-else>
        <v-btn text to="/login">Login</v-btn>
        <v-btn text to="/register">Register</v-btn>
      </div> -->
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; HUBZone HQ {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: true,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Team',
          to: '/employeetable'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Hours',
          to: '/hours'
        }
      ],
      right: true,
      rightDrawer: false,
      title: 'Time Watcher HUBZone HQ'
    }
  }
}
</script>
