<template>
  <div class="row">
    <a v-if="$store.state.users.isLoggedIn" class="link-success my-5" href="/Blogs/create">Create new Blog</a>
    <div class="col-sm-6">
      <div 
        v-for="blog in Blogs"
        :key="blog.id"
        class="card"
        style="width: 18rem"
      >
        <div  class="card-body">
          <h5 class="card-title">{{ blog.title }}</h5>
          <p class="card-text">{{ blog.description }}</p>    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { blogService} from "../ServicesHelp//blog.service";

export default {
  data() {
    return {
      Blogs: [],
    };
  },
  methods: {
    async Attend(blogId) {
      const user = JSON.parse(localStorage.getItem("user"));
      blogService
        .attend(blogId, user.id)
        .then((response) => (this.CreateResponse  = response.data));
    },
  },
  beforeMount() {
    blogService.getAll().then((blogs) => (this.Blogs = blogs));
  },
};
</script>