<template>
  <div class="home">
    <v-list/>
  </div>
  <div class="pagination">
    <v-pagination/>
  </div>
</template>

<script>
import vList from '../components/vList'
import vPagination from '../components/vPagination'
export default {
  components: {
    vList,
    vPagination
  },
  name: 'HomePage'
}
</script>

<style>
  .pagination{
    color:#fff;
    position: fixed;
    background-color: rgba(0,0,0,0.9);
    width: 100%;
    height: 10vh;
    top:90vh;
  }
  .home{
  font-family: roboto,sans-serif;
  display:flex;
  justify-content: center;
  }
</style>
