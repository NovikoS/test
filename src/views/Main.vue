<template>
  <place-list :items="data"></place-list>
</template>

<script>
import PlaceList from "../components/PlaceList"
export default {
  components:{
    PlaceList
  },
  name: "Main",
  data: () => ({
    data: [
      {title: "Test", text: "TEST TEST TEST", position: [30, 30]},
      {title: "Test2", text: "TEST2 TEST2 TEST2", position: [50, 50]},
    ],
  }),
}
</script>

<style scoped>

</style>