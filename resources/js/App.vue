<template>
    <div class="section">
        <h1>Frontoffice in Vue</h1>
        <ol>
            <li v-for="post in arrPosts" :key="post.id">{{ post.title }}</li>
        </ol>
        <!-- navbar -->
        <!-- main -->
        <!-- footer -->
    </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        arrPosts: [],
    };
  },
  created() {
    axios.get('/api/posts')
      .then(response => this.arrPosts = response.data.results);
  }

}
</script>

<style>

</style>
