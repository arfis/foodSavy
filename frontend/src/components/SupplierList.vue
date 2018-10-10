<template>
    <div class="supplier-list">
        <div class="loading" v-if="loading">Loading...</div>
        <div v-if="error" class="error">
            {{ error }}
        </div>
        <!--
          giving the post container a unique key triggers transitions
          when the post id changes.
        -->

        <div class="suppliers" v-if="suppliers && suppliers.length">
            <SupplierTile v-for="supplier in suppliers" :key="supplier.id"
                          v-bind:item="supplier">
            </SupplierTile>
        </div>
        <p v-else>No food left!</p>
    </div>
</template>

<script>
    import {getSuppliers} from '../mock/api'
    import SupplierTile from "./SupplierTile";

    export default {
        name: 'SupplierList',
        components: {SupplierTile},
        data() {
            return {
                loading: false,
                suppliers: [],
                error: null,
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
                this.error = this.suppliers = null
                this.loading = true
                getSuppliers((err, suppliers) => {
                    this.loading = false
                    if (err) {
                        this.error = err.toString()
                    } else {
                        this.suppliers = suppliers
                    }
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .suppliers {
        display: flex;
        flex-wrap: wrap;
        margin: 40px;
    }
</style>