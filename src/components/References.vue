<template>
    <div class="row">        
        <q-card class="referenceCard" flat bordered v-for="ref in references" :key="ref.Name">
            <q-item>
                <q-item-section avatar >
                    <q-avatar class="referenceAvatar">
                        <img :src="ref.ImageLink">
                    </q-avatar>
                </q-item-section>

                <q-item-section>
                    <q-item-label>{{ ref.Name }}</q-item-label>
                    <q-item-label caption>
                        <q-btn size="11px" padding="0" flat type="a" :href="ref.CoLink">
                            {{ ref.Title }}
                        </q-btn>
                    </q-item-label>
                    <q-item-label caption>
                        {{ ref.Email }}
                    </q-item-label>
                </q-item-section>
            </q-item>
        </q-card>
    </div>
</template>

<script>
import avatar from "../assets/boy-avatar.png";

export default {
    data () {
        return {
            references: [
                {
                    Name: "Zeynep Mine HOLTA",
                    Title: "Project Manager at Monitor Cro",
                    Email: "zeynepmineh@monitorcro.com",
                    CoLink: "www.monitorcro.com/",
                    ImageLink: avatar
                },
                {
                    Name: "Mehmet Akif Ibrahimoglu",
                    Title: "Co-Founder of Nika PMC",
                    Email: "akif@nikaproje.com",
                    CoLink: "www.nikaproje.com/en",
                    ImageLink: avatar
                },
                {
                    Name: "Muharrem Çilek",
                    Title: "Co-Founder of Cilek Holding",
                    Email: "muharrem@cilek.com",
                    CoLink: "www.cilek.com",
                    ImageLink: avatar
                },
            ]
        }
    }
}
</script>

<style>

</style>