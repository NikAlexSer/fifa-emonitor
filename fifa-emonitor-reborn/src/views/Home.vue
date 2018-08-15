<template>
  <div class="wrapper">
    <Header/>
    <div class="container-about">
      <AboutProject/>
    </div>
    <wordcloud/>
    <TopKeywordsRu/>
    <TopKeywordsEn/>
    <TopKeywordsEs/>
    <TopKeywordsFr/>
    <TopKeywordsPt/>
    <CountryEmo/>
    <TonCountry/>
  </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import Title from '@/components/Title.vue';
    import Features from '@/components/Features.vue';
    import Footer from '@/components/Footer.vue';
    import Header from '@/components/Header.vue';
    import TonCountry from '../components/TonCountry.js'
    import CountryEmo from '../components/CountryEmo.js'
    import TopKeywords from '../components/TopKeywords.js'
    import TopKeywordsRu from '../components/TopKeywordsRu.js'
    import TopKeywordsEn from '../components/TopKeywordsEn.js'
    import TopKeywordsFr from '../components/TopKeywordsFr.js'
    import TopKeywordsPt from '../components/TopKeywordsPt.js'
    import TopKeywordsEs from '../components/TopKeywordsEs.js'
    import wordcloud from '@/components/WordsCloud.vue'
    import AboutProject from '@/components/AboutProject.vue'

    export default Vue.extend({
        name: 'home',
        components: {
            Title,
            Features,
            Footer,
            Header,
            TonCountry,
            CountryEmo,
            TopKeywords,
            TopKeywordsRu,
            TopKeywordsEs,
            TopKeywordsEn,
            TopKeywordsFr,
            TopKeywordsPt,
            wordcloud,
            AboutProject
        },
    });
</script>
