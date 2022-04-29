<template>
    <Layout v-scroll="scrollHandler"> 
        <template v-slot:drawer>
          <q-list padding>
            <q-item
              clickable
              v-ripple
              :active="link === 'helEdc'"
              @click="scrollToElement('helEdc')"
              active-class="drawer-menu-link">
              <q-item-section>Helios EDC</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'helErp'"
              @click="scrollToElement('helErp')"
              active-class="drawer-menu-link">
              <q-item-section>Helios ERP</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'helRm'"
              @click="scrollToElement('helRm')"
              active-class="drawer-menu-link">
              <q-item-section>Helios Remote Monitoring</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'medcaseLan'"
              @click="scrollToElement('medcaseLan')"
              active-class="drawer-menu-link">
              <q-item-section>Medcase Landing</q-item-section>
            </q-item>

            <q-item
              clickable
              v-ripple
              :active="link === 'mevnAuth'"
              @click="scrollToElement('mevnAuth')"
              active-class="drawer-menu-link">
              <q-item-section>VENoM Auth</q-item-section>
            </q-item>

          </q-list>
        </template>

        <template v-slot:page>
          <q-page padding>
            <!-- <h3 class="resumeSectionTitle" id="heledc">Helios Electronic Data Capture</h3>
            <h3 class="resumeSectionTitle" id="helErp">Helios Enterprise Resource Management</h3>
            <h3 class="resumeSectionTitle" id="helRm">Helios Remote Monitoring</h3>
            <h3 class="resumeSectionTitle" id="medcaseLan">Medcase Landing</h3>
            <h3 class="resumeSectionTitle" id="mevnAuth">VENoM Stack Authentication</h3> -->
            <div v-for="project in projects" :key="project.id" v-show="isPortfolioReady">
              <Project
                :id="project.id"
                :title="project.title"
                :contribution="project.contribution"
                :stack="project.stack"
                :details="project.details"
                :images="project.images"
              > </Project>
            </div>
            <div v-show="!isPortfolioReady">
              <div class="row items-center">
                <div class="col-12 col-md-6">
                  <q-img
                    :src="require('../assets/60028.jpg')"
                    spinner-color="white"
                    max
                    width="100%"
                  />
                </div>

              </div>
            </div>
          </q-page>
        </template>
    </Layout>
</template>


<script>

import { scroll } from 'quasar';
import { debounce } from 'quasar';
import Layout from '../layouts/Layout';
import Project from '../components/Project.vue';

export default {
    components: {
      Layout,
      Project,
    },
    data() {
        return {
            isPortfolioReady: false,
            drawer: false,
            link: "helEdc",
            currentPosition: 0,
            sectionTitles: null,
            sectionWithPos: null,
            projects: [
              {
                id: "heledc",
                title: "Helios Electronic Data Capture",
                contribution: "contributionEDC",
                stack: "stackEDC",
                details: "detailsEDC",
                images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
              },
              {
                id: "helErp",
                title: "Helios Enterprise Resource Management",
                contribution: "contributionhelErp",
                stack: "stackhelErp",
                details: "detaihelErp",
                images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
              },
              {
                id: "helRm",
                title: "Helios Remote Monitoring",
                contribution: "contributionhelRm",
                stack: "stackhelRm",
                details: "detahelRm",
                images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
              },
              {
                id: "medcaseLan",
                title: "Medcase Landing",
                contribution: "contributionmedcaseLan",
                stack: "stackmedcaseLan",
                details: "detailsEmedcaseLan",
                images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
              },
              {
                id: "mevnAuth",
                title: "VENoM Stack Authentication",
                contribution: "contributionmevnAuth",
                stack: "stackmevnAuth",
                details: "detailsmevnAuth",
                images: ["https://cdn.quasar.dev/img/mountains.jpg", "https://cdn.quasar.dev/img/parallax1.jpg","https://cdn.quasar.dev/img/parallax2.jpg"],
              }
            ],
        };
    },
    methods: {
        scrollHandler: debounce(function(position){
            this.currentPosition = position
        }, 200),
        scrollToElement(elmId){
            const elm =  document.getElementById(elmId);
            const target = scroll.getScrollTarget(elm);
            const offset = elm.offsetTop - elm.scrollHeight;
            const duration = 300;
            scroll.setScrollPosition(target, offset, duration);
            this.link = elmId; 
        }
    },
    mounted() {
        this.sectionTitles = Array.from(document.getElementsByClassName("resumeSectionTitle"))
        this.sectionWithPos = this.sectionTitles.map( (x) => ( 
            { 
                elemId: x.id,
                position: x.offsetTop 
            } 
        ));
    
    },
    watch: {
        currentPosition: function (newPos){
            let posDiff = 0;
            let closestTitle = "intro";
            this.sectionWithPos.forEach(x => { 
                if(x.position-newPos+20 < posDiff){
                    posDiff = newPos-x.position;
                    closestTitle = x.elemId;
                }
            })
            this.link = closestTitle;
        }
    }
};
</script>