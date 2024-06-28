<template>
    <div class="containeer">
        <div class="row">
            <div class="col">
                <img class="img-fluid" src="https://simanyests.github.io/Images/images/IMG-20231017-WA0028.jpg" alt="" loading="lazy">
            </div>
            <div class="col">
<div id="details">
    <h1 class="display-1">Simanye Somdaka</h1>
    <span>{{ jobTitle[0].title }}</span>

</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
const jobTitle = computed(()=> this.$store.state.jobTitle)
onMounted(()=> {
    this.$store.dispatch('fetchJobTitle')
})
</script>

<style lang="scss" scoped>


</style>