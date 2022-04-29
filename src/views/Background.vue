<template>
    <Layout v-scroll="scrollHandler"> 
        <template v-slot:drawer>
            <q-list padding>
                <q-item
                    clickable
                    v-ripple
                    :active="link === 'intro'"
                    @click="scrollToElement('intro')"
                    active-class="drawer-menu-link">
                    <q-item-section>Introduction</q-item-section>
                </q-item>

                <q-item
                    clickable
                    v-ripple
                    :active="link === 'skills'"
                    @click="scrollToElement('skills')"
                    active-class="drawer-menu-link">
                    <q-item-section>Skills</q-item-section>
                </q-item>

                <q-item
                    clickable
                    v-ripple
                    :active="link === 'education'"
                    @click="scrollToElement('education')"
                    active-class="drawer-menu-link">
                    <q-item-section>Education</q-item-section>
                </q-item>

                <q-item
                    clickable
                    v-ripple
                    :active="link === 'experience'"
                    @click="scrollToElement('experience')"
                    active-class="drawer-menu-link">
                    <q-item-section>Experience</q-item-section>
                </q-item>

                <q-item
                    clickable
                    v-ripple
                    :active="link === 'interests'"
                    @click="scrollToElement('interests')"
                    active-class="drawer-menu-link">
                    <q-item-section>Interests</q-item-section>
                </q-item>
                <q-item
                    clickable
                    v-ripple
                    :active="link === 'volunteering'"
                    @click="scrollToElement('volunteering')"
                    active-class="drawer-menu-link">
                    <q-item-section>Volunteering Program</q-item-section>
                </q-item>
                <q-item
                    clickable
                    v-ripple
                    :active="link === 'references'"
                    @click="scrollToElement('references')"
                    active-class="drawer-menu-link">
                    <q-item-section>References</q-item-section>
                </q-item>
            </q-list>
        </template>

        <template v-slot:page>
            <q-page padding>
                <h3 class="resumeSectionTitle" id="intro">Introduction</h3>
                <Introduction> </Introduction>
                <h3 class="resumeSectionTitle" id="skills">Skills</h3>
                <Skills> </Skills>
                <h3 class="resumeSectionTitle" id="education">Education</h3>
                <Education> </Education>
                <h3 class="resumeSectionTitle" id="experience">Experience</h3>
                <Experience> </Experience>
                <h3 class="resumeSectionTitle" id="interests">Interests</h3>
                <Interests> </Interests>
                <h3 class="resumeSectionTitle" id="volunteering">Volunteering</h3>
                <Volunteering> </Volunteering>
                <h3 class="resumeSectionTitle" id="references">References</h3>
                <References> </References>
            </q-page>
        </template>
    </Layout>
</template>


<script>

import { scroll } from 'quasar';
import { debounce } from 'quasar';
import Layout from '../layouts/Layout';
import References from '../components/References';
import Introduction from '../components/Introduction';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Interests from '../components/Interests';
import Volunteering from '../components/Volunteering';

// const { getScrollTarget, setScrollPosition } = scroll

export default {
    components: {
        Layout,
        References,
        Introduction,
        Skills,
        Experience,
        Education,
        Interests,
        Volunteering,
    },
    data() {
        return {
            drawer: false,
            link: "intro",
            currentPosition: 0,
            sectionTitles: null,
            sectionWithPos: null,
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
//   computed: {
//       closest
//   },
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