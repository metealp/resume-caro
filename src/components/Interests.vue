<template>
    <div>
        <div class="q-pa-md" style="max-width: 500px">
            <q-list>
                <q-item>
                    <q-item-section>
                        <q-item-label class="interestTitle" >Camping & Hiking</q-item-label>
                        <q-item-label class="interestCaption" caption>I love going into a forest, exploring it, swimming in its waterfalls, greeting wild habitants.</q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                        <q-icon :name="treeIcon" color="green" size="17px"/>
                    </q-item-section>
                </q-item>

                <q-separator spaced inset />

                <q-item>
                    <q-item-section>
                        <q-item-label class="interestTitle">Electronic Dance Music</q-item-label>
                        <q-item-label class="interestCaption" caption >Although I listen wide range of musical genres, EDM and synth pop are my favorites.</q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                        <q-icon :name="musicIcon" color="blue" size="17px"/>
                    </q-item-section>
                </q-item>

                <q-separator spaced inset />

                <q-item>
                    <q-item-section>
                        <q-item-label class="interestTitle">Hearthstone</q-item-label>
                        <q-item-label class="interestCaption" caption>During lockdown, Hearthstone became main way of letting off steam.</q-item-label>
                    </q-item-section>

                    <q-item-section side top>
                        <q-icon :name="gameIcon" color="purple" size="17px"/>
                    </q-item-section>
                </q-item>

            </q-list>
        </div>
    </div>
</template>

<script>
import { fasTree } from '@quasar/extras/fontawesome-v5';
import { fasMusic } from '@quasar/extras/fontawesome-v5';
import { fasGamepad } from '@quasar/extras/fontawesome-v5';

export default {
    data(){
        return {
            treeIcon: null,
            musicIcon: null,
            gameIcon: null,
        }
    },
    created() {
        this.treeIcon = fasTree
        this.musicIcon = fasMusic
        this.gameIcon = fasGamepad

    }
}
</script>

<style>

</style>