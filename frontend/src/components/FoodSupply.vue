<template>
    <div v-if="loading">
        Loading...
    </div>

    <div v-else-if="error">
        {{error}}
    </div>

    <div v-else-if="item">
        <div class="img-wrapper">
            <img :alt="item.store" :src="item.imgUrl">
        </div>

        <div class="content">
            <h2>
                <md-button v-on:click="goBack()" class="md-icon-button">
                    <md-icon>arrow_back</md-icon>
                </md-button>
                {{item.store}}
            </h2>
            <div class="wrapper">
                <div class="col-md-6 detail-holder">
                    <supplier-detail></supplier-detail>
                </div>
                <div class="col-md-6 product-list">
                    <food-tile v-for="product in item.products" :key="product.id"
                               v-bind:item="product"></food-tile>
                </div>
            </div>
        </div>
        <!--<p>{{item.price}}</p>-->
    </div>
</template>

<script>
    import {getPost} from '../mock/api';
    import FoodTile from "./FoodTile";
    import SupplierDetail from "./SupplierDetail";

    export default {
        name: "FoodSuply",
        components: {SupplierDetail, FoodTile},
        data() {
            return {
                loading: false,
                item: null,
                error: null
            }
        },
        created() {
            this.fetchData()
        },
        watch: {
            '$route': 'fetchData'
        },
        methods: {
            fetchData() {
                getPost(this.$route.params.id, (err, item) => {
                    this.loading = false
                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.item = item
                    }
                })
            },
            goBack: function (event) {
                this.$router.go(-1);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .md-icon-button {
        z-index: 0;
    }

    .img-wrapper {
        padding: 10px 5px;
        border-bottom: 1px solid gainsboro;
        width: 100%;
        display: flex;
        justify-content: center;

        img {
            height: 300px;
        }
    }

    .content {
        margin: 3%;
    }

    h2 {
        display: flex;
        align-items: center;
        position: sticky;
        top: 10px;
        z-index: 2;
    }

    .wrapper {
        display: flex;
    }

    .detail-holder {
        flex: 2;
        position: sticky;
        top: 30px;
        display: inline-table;
    }

    .product-list {
        flex: 3;
    }
</style>