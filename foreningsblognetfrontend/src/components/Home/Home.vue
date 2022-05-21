<template>
  <div class="row">
    <a v-if="$store.state.users.isLoggedIn" class="link-success my-5" href="/Blogs/create">Create new Blog</a>
    <a v-if="error">Noget gik galt</a>
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
    
  },
  beforeMount() { 
    blogService.getAll().then((blogs) => (this.Blogs = blogs))
    const reloaded = localStorage.getItem('reloaded');
      if (reloaded !== 'true') {
       localStorage.setItem('reloaded', 'true');
       location.reload();
      }
  },
};
</script>