<template>
    <div class="landing-top">
        <div class="landing-title">
            <h2 class="title">{{ $t("title.title") }}</h2>
        </div>
        <div class="landing-title-description">
            <span>{{ $t("title.description") }}</span>
        </div>
    </div>

</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Title',
        props: {

        },
    });
</script>

<style lang="scss">
    @import '../assets/scss/title';
</style>
