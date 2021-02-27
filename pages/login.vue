<template>
  <v-container>
    <h1>Login</h1>

    <UserAuthForm buttonText="Login" :submitForm="loginUser" />
  </v-container>
</template>

<script>
  
  export default {
    // components: {
    //   UserAuthForm
    // },
    methods: {
      loginUser(logininfo){
        this.$auth.loginWith('local', {
            data: logininfo
        })
        // this.$auth.loginWith('google')
        alert('You pressed a button')
      }
    }
  }
</script>

<style lang="scss" scoped>
</style> 