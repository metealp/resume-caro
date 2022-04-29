<template>
    <div id="skillsCont" class="row items-start">
        <div class="skillSect col-12 col-md-auto">
            <h5>Frontend</h5>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="vueIcon" id="vueAvatar" text-color="white" />
                Vue.js
            </q-chip>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="reactIcon" id="reactAvatar" text-color="white" />
                React
            </q-chip>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="htmlIcon" id="htmlAvatar" text-color="white" />
                HTML5
            </q-chip>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="cssIcon" id="cssAvatar" text-color="white" />
                CSS3
            </q-chip>
        </div>
        <!-- <q-separator vertical inset spaced/> -->
        <div class="skillSect col-12 col-md-auto">
            <h5>Backend</h5>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="nodeIcon" id="nodeAvatar" text-color="white" />
                Node.js
            </q-chip>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="jsIcon" id="expressAvatar" text-color="white" />
                Express.js
            </q-chip>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="mongoIcon" id="mongoAvatar" text-color="white" />
                MongoDB
            </q-chip>
        </div>
        <!-- <q-separator vertical inset spaced/> -->
        <div class="skillSect col-12 col-md-auto">
            <h5>Mobile</h5>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="swiftIcon" id="swiftAvatar" text-color="white" />
                Swift
            </q-chip>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="swiftIcon" id="swiftUiAvatar" text-color="white" />
                SwiftUI
            </q-chip>
            <!-- <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="androidIcon" id="flutterAvatar" text-color="white" />
                Flutter
            </q-chip>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="androidIcon" id="dartAvatar" text-color="white" />
                Dart
            </q-chip> -->

            
        </div>
        <!-- <q-separator vertical inset spaced/> -->
        <div class="skillSect col-12 col-md-auto">
            <h5>Devops</h5>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="dockerIcon" id="dockerAvatar" text-color="white" />
                Docker
            </q-chip>
            <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="gitIcon" id="gitAvatar" text-color="white" />
                Git
            </q-chip>
            <!-- <q-chip size="md" square>
                <q-avatar font-size="15px" :icon="cloudIcon" id="azureAvatar" text-color="white" />
                Azure
            </q-chip> -->
        </div>
    </div>
</template>

<script>
import { fabVuejs } from '@quasar/extras/fontawesome-v5'; 
import { fabReact } from '@quasar/extras/fontawesome-v5'; 
import { fabHtml5 } from '@quasar/extras/fontawesome-v5';
import { fabCss3Alt } from '@quasar/extras/fontawesome-v5';

import { fabNodeJs } from '@quasar/extras/fontawesome-v5';
import { fabEnvira } from '@quasar/extras/fontawesome-v5';
import { fabJs } from '@quasar/extras/fontawesome-v5';

import { fabDocker } from '@quasar/extras/fontawesome-v5';
import { fabGitAlt } from '@quasar/extras/fontawesome-v5';
import { fasCloud } from '@quasar/extras/fontawesome-v5';

import { fabSwift } from '@quasar/extras/fontawesome-v5';
import { fabAndroid } from '@quasar/extras/fontawesome-v5';

export default {
    data() {
        return {
            vueIcon: null,
            reactIcon: null,
            htmlIcon: null,
            cssIcon: null,
            nodeIcon: null,
            mongoIcon: null,
            jsIcon: null,
            dockerIcon: null,
            gitIcon: null,
            cloudIcon: null,
            swiftIcon: null,
            androidIcon: null,
        };
    },
    created() {
        this.vueIcon = fabVuejs
        this.reactIcon = fabReact
        this.htmlIcon = fabHtml5
        this.cssIcon = fabCss3Alt
        this.jqueryIcon = fabVuejs
        this.nodeIcon = fabNodeJs
        this.mongoIcon = fabEnvira
        this.jsIcon = fabJs
        this.dockerIcon = fabDocker
        this.gitIcon = fabGitAlt
        this.cloudIcon = fasCloud
        this.swiftIcon = fabSwift
        this.androidIcon = fabAndroid

    },
}
</script>

<style>

</style>