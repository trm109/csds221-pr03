<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <EntryLog :entries="entries" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import EntryLog from './components/EntryLog.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    EntryLog
  },
  data() {
    return {
      entries: [
        {
          id: 0,
          text: 'Hello World',
          health: 1
        },
        {
          id: 1,
          text: 'some message',
          health: 2
        },
        {
          id: 2,
          text: 'some other message',
          health: 3
        },
        {
          id: 3,
          text: 'some cooler message',
          health: 5
        }
      ]
    }
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
