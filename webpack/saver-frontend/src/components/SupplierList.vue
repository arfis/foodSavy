<template>
  <ApolloQuery :query="query">
    <template slot-scope="{ result: { loading, error, data } }">
      <div class="supplier-list">
        <div class="loading" v-if="loading">Loading...</div>
        <div v-if="error" class="error">
          {{ error }}
        </div>
        <!--
          giving the post container a unique key triggers transitions
          when the post id changes.
        -->
        DATA:
        <section v-if="data">
          {{data}}
          <div class="suppliers" v-if="suppliers && suppliers.length">
            <SupplierTile v-for="supplier in data.allCompanies" :key="supplier.id"
                          v-bind:item="supplier">
            </SupplierTile>
          </div>
        </section>
        <p v-else>No food left!</p>

      </div>
    </template>
  </ApolloQuery>
</template>
<script>
  import {getSuppliers} from '../mock/api'
  import SupplierTile from "./SupplierTile";
  import {GET_COMPANIES} from "../queries.js";

  export default {
    name: 'SupplierList',
    components: {SupplierTile},
    data() {
      return {
        loading: false,
        suppliers: [],
        error: null,
        query: GET_COMPANIES
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
