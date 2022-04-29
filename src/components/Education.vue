<template>
    <div class="q-px-lg q-pb-md">
        <q-timeline :layout="layout" color="secondary">
        <q-timeline-entry
            title="Istanbul Technical University"
            subtitle="July, 2020"
            side="left"
        >
            <div>
            Earned Master degree<strong>, with high honors,</strong> in Information Technologies in Construction Management
            </div>
        </q-timeline-entry>

        <q-timeline-entry
            title="Istanbul Technical University"
            subtitle="August, 2018"
            side="right"
        >
            <div>
            Earned Bachelor degree in Civil Engineering
            </div>
        </q-timeline-entry>


        <q-timeline-entry
            title="Besiktas Anatolian Highschool"
            subtitle="June, 2011"
            side="left"
        >
            <div>
            Graduated from one of the most reputable high schools in Turkey.
            </div>
        </q-timeline-entry>

        </q-timeline>
    </div>
</template>

<script>
export default {
    computed: {
        layout () {
        return this.$q.screen.lt.sm ? 'dense' : (this.$q.screen.lt.md ? 'comfortable' : 'loose')
        }
    }
}

</script>

<style>

</style>