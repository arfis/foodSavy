<template>
            <router-view class="view"></router-view>
</template>

<script>
    export default {
        name: "MainPage"
    }
</script>

<style lang="scss" scoped>
    .md-app {
        max-height: calc(100vh);
        border: 1px solid rgba(#000, .12);
    }

    .food-toolbar {
        background-color: #ee9c5b !important;

        span {
            color: white !important;
        }
    }

    .button-add {
        display: flex;
        justify-content: center;
        align-content: center;
        align-items: center;
        font-size: 26px;
    }

    .md-drawer {
        width: 230px;
        max-width: calc(100vw - 125px);
    }
</style>