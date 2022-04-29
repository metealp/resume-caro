<template>
    <div class="q-pa-md row items-start q-gutter-md row items-stretch">
        <q-card class="volunteeringCard" flat bordered>
            <q-card-section class="row">
                <q-card-section class="col-md-9 self-stretch col-12 order-last volDesc">
                    <div class="text-h5 q-mt-sm q-mb-xs">The Human Library</div>
                    The Human Library aims to address people's prejudices by helping them to talk to those they would not normally meet. The organization has a chapter in Istanbul Technical University and organize various events every year. I personally contributed to the project as a "book", so "bookworms" can ask their questions and challenge their prejudices.
                </q-card-section>
                <q-card-section class="col-md-3 col-12 self-stretch order-first">
                    <q-img class="rounded-borders"
                    :src="require('../assets/human_library.png')"
                    />
                </q-card-section>
            </q-card-section>
        </q-card>
        <q-card class="volunteeringCard" flat bordered>
            <q-card-section class="row">
                <q-card-section class="col-md-9 self-stretch col-12 order-last volDesc">
                    <div class="text-h5 q-mt-sm q-mb-xs">Food not Bombs</div>
                    Food Not Bombs is an all-volunteer global movement that shares free vegan meals as a protest to war and poverty. I gathered surplus food from groceries which would otherwise go to waste, cooked with friends as if it is a festival and shared with homeless people in Istanbul. 
                </q-card-section>

                <q-card-section class="col-md-3 col-12 order-first">
                    <q-img class="rounded-borders"
                    containt="true"
                    :src="require('../assets/Food_Not_Bombs.png')"
                    />
                </q-card-section>
            </q-card-section>
        </q-card>
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>