<template>
    <div class="q-px-lg q-pb-md">
        <q-timeline :layout="layout" color="secondary">

        <q-timeline-entry
            title="Web Developer at Monitor Cro"
            subtitle="June, 2020 ~ ..."
            side="left"
        >
            <div>
                Contributing to development and maintenance of electronic data capture, human resources web  apps and research monitoring mobile app for clinical research companies. Using various technologies such as Vue.js, Express, Node, MongoDB, jQuery, Flutter.
            </div>
        </q-timeline-entry>

        <q-timeline-entry
            title="BIM Developer at Nika PMC"
            subtitle="December, 2018 ~ June, 2020"
            side="right"
        >
            <div>
                Contributed to development and maintenance Autodesk plugins for metro line designers, electronic data capture system for Istanbul Grand Airport contractors. Used Python, pyRevit and Revit APIs for design automation. In addition, used Django and Azure SQL Server for electronic data capture.
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