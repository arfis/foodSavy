<template>
    <md-app md-waterfall md-mode="reveal">
        <md-app-toolbar class="food-toolbar">
            <span class="md-title">Food Saver</span>
        </md-app-toolbar>

        <md-app-content>
            <div class="switch">
                <span v-on:click="showAllProducts()">
                    <md-icon class="icon">list</md-icon>
                </span>
                <span v-on:click="showAllCompanies()">
                    <md-icon class="icon">view_comfy</md-icon>
                </span>
            </div>
            <SupplierList v-if="!showProducts"></SupplierList>
            <ProductsList v-else ></ProductsList>

            <md-dialog :md-active.sync="showDialog">
                <md-dialog-title>Nova ponuka</md-dialog-title>
                <!--<md-input v-model="store"/>-->
                <md-field md-inline>
                    <label>Obchod</label>
                    <md-input v-model="supplier.store"></md-input>
                </md-field>
                <md-field md-inline>
                    <label>Opis</label>
                    <md-input v-model="supplier.description"></md-input>
                </md-field>
                <md-button v-on:click="saveCompany()" class="md-primary">Vytvor</md-button>
            </md-dialog>
            <md-speed-dial class="create-actions md-bottom-right">
                <md-speed-dial-target v-on:click="openCreationDialog()">
                    <md-icon>add</md-icon>
                </md-speed-dial-target>
                <md-speed-dial-content>
                    <md-button class="md-icon-button">
                        <md-icon>fastfood</md-icon>
                    </md-button>

                    <md-button class="md-icon-button">
                        <md-icon>face</md-icon>
                    </md-button>
                </md-speed-dial-content>
            </md-speed-dial>
        </md-app-content>
    </md-app>
</template>

<script>
    import SupplierList from "./SupplierList";
    import ProductsList from "./ProductsList";
    export default {
        name: "ListView",
        components: {ProductsList, SupplierList},
        data() {
            return {
                showDialog: false,
                supplier: {
                    store: null,
                    description: null
                },
                showProducts: false
            }
        },
        methods: {
            showAllProducts: function() {
                this.showProducts = true;
            },
            showAllCompanies: function() {
                this.showProducts = false;
            },
            openCreationDialog: function () {
                this.showDialog = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    .switch {
        display: block;
        margin: 20px;
        text-align: center;

        .icon {
            margin: 5px;
            cursor: pointer;

            &:hover {
                color: gainsboro;
            }
        }
    }

    .create-actions {
        position: sticky !important;
        float: right !important;
    }
</style>