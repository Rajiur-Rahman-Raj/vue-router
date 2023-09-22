<script setup>
    import {
      onBeforeMount,
        onMounted,
        reactive
    } from "vue";

    import {useRoute} from "vue-router";
    const route = useRoute();

    const postContent = reactive({
        title: ""
    })

    onMounted(()=>{
        fetch(`https://dummyjson.com/posts/${route.params.id}`)
        .then(res=>res.json())
        .then(data=>{
            postContent.title = data.title
        })
    })

</script>

<template>
    <div>
        <h2>Post id = {{ $route.params.id }}</h2>
        <p>Post Title: {{ postContent.title }}</p>
    </div>
</template>

<style scoped>

</style>