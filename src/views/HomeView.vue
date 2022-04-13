<template>
  <div class="home">
    <v-list/>
  </div>
  <div class="pagination">
    <div class="page_list">1</div>
  </div>
</template>

<script>
import vList from '../components/vList'
export default {
  components: {
    vList
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
  .page_list{
  display:flex;
  align-items: center;
  justify-content: center;
  }
  .home{
  font-family: roboto,sans-serif;
  display:flex;
  justify-content: center;
  }
</style>
