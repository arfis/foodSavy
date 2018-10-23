<template>
  <div class="detail-wrapper">
    <div class="opening-hours">
      <h4>Otvaracia doba</h4>
      <span>Po: 10:00 - 22:00</span>
      <span>Ut: 10:00 - 22:00</span>
      <span>St: 10:00 - 22:00</span>
      <span>Stv: 10:00 - 22:00</span>
      <span>Pia: 10:00 - 22:00</span>
      <span>So: 10:00 - 22:00</span>
      <span>Ne: 10:00 - 22:00</span>
    </div>
    <div class="map-wrapper">
      <img alt="Map" src="../assets/map-mock.png">
    </div>
  </div>
</template>

<script>
  export default {
    name: "SupplierDetail"
  }
</script>

<style lang="scss" scoped>

  .opening-hours {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .map-wrapper {
    margin: 10px 30px;
  }

  .detail-wrapper {
    position: sticky;
  }
</style>
