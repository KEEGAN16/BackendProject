<template>
  <div class="error-page">
    <div class="overlay">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <ul class="breadcrumb">
              <li><a href="index.vue">Home</a></li>
              <li class="active">Page Not Found</li>
            </ul>
            <h2>404 Error</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-5">
            <div class="error-page-content primary-shadow white-bg">
              <h5>Page you are looking is not found</h5>
              <p>
                It may have been moved, or removed altogether. Perhaps you can
                return back to the site's homepage
              </p>
              <h5>Or Search Here</h5>
              <form @submit.prevent="search">
                <input
                  type="text"
                  v-model="query"
                  placeholder="Your Search Query"
                />
                <input type="submit" value="go" />
              </form>
              <a href="index.vue" class="button alt">Back to Homepage</a>
            </div>
          </div>
          <div class="col-md-5"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    search() {
      console.log("Search query:", this.query);
    },
  },
};
</script>

<style scoped></style>
