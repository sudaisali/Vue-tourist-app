<template>
<nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark p-2">
  <div class="container-fluid">
  <router-link class="navbar-brand mx-2" to="/">TouristApp</router-link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <div class="navbar-nav">
      <router-link class="nav-item mx-2 mt-3" v-for="destination in destinations" :key="destination.id" 
      :to="{
        name:'destination',
        params:{
          id:destination.id,
          slug:destination.slug
        }
      }">
       <p>{{ destination.name }}</p>
      
      </router-link>
  </div>
</div>
    </div>
</nav>
 <router-view></router-view>
 
</template>

<script setup>
import datasource from '../data.json'
import { ref } from 'vue';
const destinations = ref(datasource.destinations)
</script>

<style scoped>
a{
    text-decoration: none;
    color: white;
}
.active-class{
    color: green;
}
</style>