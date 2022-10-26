<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { makeServer } from './server'
</script>

<template>
  

  <div class="usuarios">
    <h1>Usuarios</h1>
    <ul>
      <li v-for="usuario in usuarios" :key="usuario.id">
        {{ usuario.nombre }}
      </li>
    </ul>
  </div>

</template>
<script>
import axios from 'axios';

export default {
  name: 'Users',
  data() {
    return {
      usuarios: []
    }
  },
  mounted() {
    axios.get('api/users')
      .then(response => {
        this.users = response.data
      })
  }
}
</script>

