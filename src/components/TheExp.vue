<template>
         <div class="card mx-2 ">
           
            
          <img :src="`/assets/${props.experience.image}`" alt="" class="img-fluid rounded">
          
           
            <h1 class=" card-header  fs-5  text-center">{{ props.experience.name }}</h1>
         
         
         </div>
          
            
        
       

         
         
       
</template>

<script setup>

import { defineProps } from 'vue';

const props = defineProps({
    experience:{
        type:Object,
        required : true
    }
})

</script>

<style>
a{
    text-decoration: none;
   
}

</style>