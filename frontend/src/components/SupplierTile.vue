<template>
    <md-content v-on:click="navigate()" class="md-elevation-3 supplier-wrapper">
        <div class="thumbinail-wrapper">
            <img :src="item.thumbnail"/>
        </div>
        <div class="content">
            <h4>{{item.store}}</h4>
            <ul class="types">
                <li v-for="product in item.products">
                    {{product}}
                </li>
            </ul>
            <p>{{item.description}}</p>
        </div>
    </md-content>
</template>

<script>
    export default {
        name: "SupplierTile",
        props: ['item'],
        methods: {
            navigate: function (event) {
                this.$router.push({path: `/supplier/${this.item.id}`})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .supplier-wrapper {
        cursor: pointer;
        display: flex;
        transition: all .4s;
        margin: 10px;
        justify-content: center;
        width: 100%;

        &:hover {
            background: aliceblue;
        }

        .thumbinail-wrapper {
            height: 200px;
            width: 20%;
            margin: 10px;

            img {
                height: 200px;
            }
        }

        .content {
            width: 80%;
        }
    }
</style>