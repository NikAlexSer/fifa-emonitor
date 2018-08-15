<template>
    <header class="header">
            <div class="navbar">
                <span class="navbar-brand" href="#">FIFA-emonitor</span>
            </div>
            <div class="navbar">
                <ul class="nav navbar-nav" id="mainnav">
                    <li class="active"><a href="#aboutProject">О проекте</a></li>
                    <li class=""><a href="#tweetslang">Язык твитов</a></li>
                    <li class=""><a href="#tonalcountry">Тональность сообщений</a></li>
                    <li class=""><a href="#topkeywords">Топ 5 ключевых слов</a></li>
                    <li><a href="#emocountry">Эмоции по языкам</a></li>
                    <li><a href="#devteam">Команда разработки</a></li>
                    <li><a href="#helpteam">Наши Кураторы</a></li>
                </ul>
            </div>
    </header>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.extend({
        name: 'Header',
        props: {
        },
    });
</script>

<style lang="scss">
    @import '../assets/scss/header';
</style>
