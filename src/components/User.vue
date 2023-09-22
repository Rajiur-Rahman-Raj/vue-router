<script setup>

</script>

<template>
    <div>
        <h3>This is user page</h3>
        <p v-if="$route.params.id">User id = {{ $route.params.id }}</p>
    </div>
</template>

<style scoped></style>