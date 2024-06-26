<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead">Simanye's Portfolio &copy; </p> <span class="shadow">{{ cYear }}</span>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComp",
    data() {
        return {
            cYear: new Date().getUTCFullYear()
        }
    },
}
</script>

<style>


</style>
