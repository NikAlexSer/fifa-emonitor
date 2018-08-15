<template>
    <div>
        <div class="landing-features-title">
            <h2>{{ $t('features.title') }}</h2>
        </div>
        <div class="landing-features">
            <div class="landing-features-item" v-for="(item, index) in $t('features.features')" v-html="$t('features.features')[index]"></div>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Features'
    });
</script>

<style lang="scss">
    @import '../assets/scss/features';
</style>