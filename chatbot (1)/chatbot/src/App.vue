<template>
<Chat/>
</template>
<vue-widget title="Vuidget live example"></vue-widget> 
<script>
import Chat from './components/Chat'

export default {
  name: 'App',
  components: {
    Chat
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
