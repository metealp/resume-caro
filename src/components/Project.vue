<template>
    <div class="q-pa-md">
        <h3 class="resumeSectionTitle" :id="id">{{ title }}</h3>
        <q-carousel
        animated
        swipeable
        transition-next="fade"
        v-model="slide"
        arrows
        navigation
        infinite
        autoplay="4000"
        >
            <q-carousel-slide v-for="(item, index) in images" :name="index" :img-src="item" :key="index" />
        </q-carousel>
        <div class="row projectDets">
            <div class="col-12 col-md-4 text-center">
                <h5>Contribution</h5>
                <p>{{ contribution }}</p>
            </div>
            <div class="col-12 col-md-4 text-center">
                <h5>Stack</h5>
                <p>{{ stack }}</p>
            </div>
            <div class="col-12 col-md-4 text-center">
                <h5>Details</h5>
                <p>{{ details }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        id: String,
        title: String,
        contribution: String,
        stack: String,
        details: String,
        images: [String],
    },
    data () {
        return {
            slide: 0
        }
    }
}
</script>

<style>

</style>