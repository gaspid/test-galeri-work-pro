<template>
  <div class="list">
    <v-card :item='post'/>
  </div>
</template>

<script>
import vCard from './vCard.vue'
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
  components: {
    vCard
  },
  methods: {
    ...mapMutations({}),
    ...mapActions({
      loadFull: 'loadFull'
    })

  },
  mounted () {
    this.loadFull()
  },
  computed: {
    ...mapState({
      post: state => state.post
    })
  }

}
</script>

<style>
.list{
  display : flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom:60px;
  width: 100%;
}
@media only screen and (min-width: 1000px)  {
.list{
  width: 67%;
  justify-content: space-between;
}
  .img img{
width: 320px;
}
}
@media only screen and (min-width: 768px) and (max-width:1000px) {
  .img img{
width: 320px;
}
.card{
margin: 10px;
}
}
@media only screen and (min-width: 480px) and (max-width:767px) {
.img img{
width: 100%;
}

.card{
margin: 20px;
width: 100%;
}
}

@media only screen  and (max-width:479px)  {

.img img{
width: 100%;
}
.card{
margin: 0;
width: 100%;
}
}
</style>
