<template>
    <section class="row justify-content-center mb-5 pt-5">
        <div v-for="blog in blogs" :key="blog.id" class="col-10">
            <div class="row">
                <div class="col-8">
                    hi
                </div>
                <div class="col-4">
                    <img class="img-fluid"
                        src="https://plus.unsplash.com/premium_photo-1676998931123-75789162f170?auto=format&fit=crop&q=80&w=2670&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="">
                </div>
            </div>
        </div>
    </section>
</template>



<script>
import { Blog } from '../models/Blog';


export default {
    props: {
        blogProp: { type: Blog, required: true }
    },
    setup() {
        return {

        }
    }
}

</script>

<style lang="scss" scoped></style>