<template>
  <div v-for="post in item " :key="post.id" class='card'>
  <a :href='post.user.links.html' target='_blank'>
    <div class='head_card'>
        <img class='profile_image'
        :src=post.user.profile_image.large
        alt="ava"/>
        <div class='name'>
          <div class='name_user'>{{post.user.name}}</div>
          <div v-if="post.user.twitter_username!=null" class='name_nick'>@{{post.user.twitter_username}}</div>
        </div>
    </div>
    </a>
        <div class='img'>
        <img
        :src=post.urls.small
        />

        </div>
        <div class='vuew'>

          <img src="../assets/Eye.svg" alt="Eye"/>
          <div class='total_vuew'>{{post.likes}}</div>
        </div>
 </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Array
    }
  }

}
</script>

<style>
.card{
  display: flex;
  flex-direction: column;
  max-width: auto;
}
.head_card{
  display: flex;
  align-items: center;
  font-size: 12px;
  padding: 10px 0 10px 10px;
}

.vuew{
  color:#8D8D8D;
  display: flex;
  flex-direction: row-reverse;
  padding: 10px 10px 10px 10px;
}
.vuew img{
margin-left:5px;
}

.profile_image{
width: 30px;
height: 30px;
  border-radius: 50%;
  margin:0 10px 0 0;
}
.name_nick{
color:#8D8D8D
}
.name_user{
font-weight: bold;
}

</style>
