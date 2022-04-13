<template>
  <div class="page_list">
    <ul>
      <li v-if="page>1" class="page"><div @click='mutPage(1),loadFull()'>1</div></li>
      <li v-if="page>2"><div>...</div></li>
      <li v-if="page>2" class="page"><div @click='mutPage(page-1),loadFull()'>{{page-1}}</div></li>
      <li class="active"><div>{{page}}</div></li>
      <li v-if="page<98" class="page"><div @click='mutPage(page+1),loadFull()'>{{page+1}}</div></li>
      <li v-if="page<98"><div>...</div></li>
      <li v-if="page<99" class="page"><div @click='mutPage(99),loadFull()'>99</div></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState, mapActions } from 'vuex'
export default {
  computed: {
    ...mapState({
      page: state => state.page
    })
  },
  methods: {
    ...mapMutations({
      mutPage: 'mutPage'
    }),
    ...mapActions({
      loadFull: 'loadFull'
    })
  }
}
</script>

<style>
.page_list{
display: flex;
align-items:cente;
justify-content:center;
}
 ul {
 width: 320px;
 color:#fff;
 display:flex;
 align-items: flex-end;
 justify-content: space-around;
 }
 li {
 font-size:18px;
 list-style: none;

 }
 .active {
 font-size:32px;
 }
 li.page:hover{
 font-size:32px;
 }

</style>
