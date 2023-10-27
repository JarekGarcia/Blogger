<template>
  <div class="container-fluid">
    <section class="row bg-warning">
      <div class="col-12">
        <h1><i class="mdi mdi-email"></i>Blogger</h1>
      </div>
    </section>
    <section class="row justify-content-center mb-5 pt-5">
      <div v-for="blog in blogs" :key="blog.id" class="col-10 mb-5 bg-secondary">
        <div class="row">
          <div class="col-8">
            <div>
              <p class="fw-bold fs-5">{{ blog.title }}</p>
            </div>
            <div>
              <p class="fw-bold fs-5">{{ blog.body }}</p>
            </div>
            <div>
              <p class="fw-bold fs-5">{{ blog.tags }}</p>
            </div>
          </div>
          <div class="col-4">
            <img :class="img - fluid" :src="blog.imgUrl" alt="">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { logger } from '../utils/Logger';
import { blogsService } from '../services/BlogsService';
import { AppState } from '../AppState.js';
import { Blog } from '../models/Blog';
import Pop from '../utils/Pop';

export default {
  props: {
    blogProp: { type: Blog, required: true }
  },


  setup() {

    async function getBlogs() {
      try {
        await blogsService.getBlogs()

      } catch (error) {
        Pop.error(error)
      }
    }

    onMounted(() => {
      // logger.log('working')
      getBlogs()
    })
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
img {
  height: 20vh;
  width: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
