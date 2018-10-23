<template>
  <md-card class="food-tile">
    <md-card-header>
      <md-card-header-text>
        <div class="md-title">{{item.food}}</div>
        <div class="md-subhead">{{item.price}} {{item.currency}}</div>
        <div class="md-subhead">Pocet: {{item.count}}</div>
      </md-card-header-text>

      <md-card-media>
        <img :src="item.foodUrl" :alt="item.food">
      </md-card-media>
    </md-card-header>

    <md-card-actions>
      <md-button>Action</md-button>
    </md-card-actions>
  </md-card>
  <!--<div class="item">-->
  <!--<h5>{{item.food}}</h5>-->
  <!--<p>{{item.price}}</p>-->
  <!--</div>-->
</template>

<script>
  export default {
    name: "FoodTile",
    props: ['item']
  }
</script>

<style lang="scss" scoped>
  .food-tile {
    margin: 5% 0;

    &:hover {
      cursor: pointer;
      background: lightgray;
    }
  }
</style>
