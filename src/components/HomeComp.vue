<template>
  <div class="container mt-5">
    <div class="row">
          
         <router-link class="col-md-3 gx-5 gy-5" v-for="destination in destinations" :key="destination.id" 
         :to="{
           name: 'destination',
           params: {
            id: destination.id,
            slug:  destination.slug
           }

         }">
          <div class="card"> 
          <img :src="`/assets/${destination.image}`" alt="" class="img-fluid">
           
              <h1 class="card-header fs-5 text-center">{{ destination.name }}</h1>
            </div>
           
          </router-link>
          
     
        </div>
        </div>
 
</template>

  
  
  <script setup>
  import { ref } from 'vue';
  import sourcedata from '../data.json'
 
   const destinations = ref(sourcedata.destinations)
  
  </script>
  
  <style scoped>
  a{
    text-decoration: none;
  }
 .card:hover{
  transform: scale(1.1);
 }
  
  </style>