<template>

<div class="container">
    <div class="m-4">
                <TheBack/>
            </div>
            <h1 class="fs-10 p-3" >{{experience.name}}</h1>
            <div class="container d-flex ">
                <img :src="`/assets/${experience.image}`" alt="" class="img-fluid rounded">
                <p class="mx-5">{{ experience.description }}</p>
            </div>
           </div>
</template>

<script setup>
import TheBack from '@/components/TheBack.vue';
import {  defineProps, computed } from 'vue';
import dataSource from '../data.json'
 
 const props = defineProps({
    id:{
        type : Number,
        required: true
    },
    myslug:{
        type:String,
        required : true,
    }
 })

 const destination = computed(()=>{
   return dataSource.destinations.find(
    destination => destination.id === props.id
   )

 })



 const experience = computed(
    ()=>{
        return destination.value.experiences.find(
            experience => experience.slug === props.myslug
        )
    }
 )

 



</script>

