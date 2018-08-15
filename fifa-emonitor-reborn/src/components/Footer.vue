<template>
    <div class="footer">
        <div class="footer-language">
            <button :class="{active: selected === 1}" class="btn-lang" v-on:click="$i18n.locale = 'en'"  @click="selected = 1">{{ $t('footer.languages.en') }}</button>
            <button :class="{active: selected === 2}" class="btn-lang " v-on:click="$i18n.locale = 'ru'" @click="selected = 2">{{ $t('footer.languages.ru') }}</button>
        </div>
        <div class="footer-copyright">
            {{ $t('footer.copyrights') }}
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Footer',
        data: function() {
            return {selected: 2}
        },
        props: { },
    });
</script>

<style lang="scss">
    @import '../assets/scss/footer';
</style>