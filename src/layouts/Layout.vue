<template>
  <div >
    <q-layout view="lHh Lpr lff" style="100%" class="shadow-2 rounded-borders" >
      <q-header elevated class="layoutHeader">
        <q-toolbar>
            <q-btn flat @click="drawer = !drawer" round dense icon="r_menu" />
            <q-toolbar-title></q-toolbar-title>
            <q-tabs align="right">
                <q-route-tab to="/" label="Resume" />
                <q-route-tab to="/portfolio" label="Portfolio" />
                <!-- <q-route-tab to="/blog" label="Blog" /> -->
            </q-tabs>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above
        :width="220"
        :breakpoint="400"
        id="mainDrawer"
      >
        <q-scroll-area style="height: calc( 100% - 220px); margin-top: 220px; border-right: 1px solid #ddd">
            <slot name="drawer" />
        </q-scroll-area>

        <q-img class="absolute-top avatarBgImage" :src="require('../assets/8568.jpg')" style="height: 220px">
            <div id="resumeAvatarCont" class="q-pa-sm q-mt-sm absolute-top">
              <div class="row justify-center">
                <q-avatar size="90px" class="" >
                    <img :src="layoutAvatar">
                </q-avatar>
              </div>
            </div>
            <div class="absolute-bottom bg-transparent">
              <div class="row justify-center">
                <div class="text-weight-bold q-mt-md">Mete Alp Kızılçay, MSc.</div>
                <div class="text-weight-bold">Full Stack Developer</div>
                <div>
                  <q-btn flat size="10px" round class="socialMediaLinks" 
                  type="a" :icon="instagramIcon" 
                  href="https://www.instagram.com/mete.spam/" target="_blank" />
                  <q-btn flat size="10px" round class="socialMediaLinks" 
                  type="a" :icon="githubIcon" 
                  href="https://github.com/metealp" target="_blank" />
                  <q-btn flat size="10px" round class="socialMediaLinks" 
                  type="a" :icon="twitterIcon" 
                  href="https://twitter.com/metealpki" target="_blank" />
                  <q-btn flat size="10px" round class="socialMediaLinks" 
                  type="a" :icon="linkedinIcon" 
                  href="https://www.linkedin.com/in/mete-alp-k%C4%B1z%C4%B1l%C3%A7ay-9bb184161/" target="_blank" />
                </div>
              </div>
              <div id="layoutContEmail">kizilcaymetealp@gmail.com</div>
            </div>
        </q-img>
      </q-drawer>

      <q-page-container>
          <slot name="page" />
      </q-page-container>
    </q-layout>
  </div>
</template>
<script>
import { fabLinkedin } from '@quasar/extras/fontawesome-v5';
import { fabInstagram } from '@quasar/extras/fontawesome-v5';
import { fabGithub } from '@quasar/extras/fontawesome-v5';
import { fabTwitter } from '@quasar/extras/fontawesome-v5';
import avatar from "../assets/resume_img.jpg";

export default {
    data() {
        return {
            drawer: false,
            linkedinIcon: "",
            twitterIcon: null,
            githubIcon: null,
            instagramIcon: null,
            layoutAvatar: avatar,
        };
    },
    created() {
        this.linkedinIcon = fabLinkedin
        this.twitterIcon = fabTwitter
        this.githubIcon = fabGithub
        this.instagramIcon = fabInstagram
    },

};
</script>