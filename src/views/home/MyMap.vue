<template>
  <div>
    <headBar></headBar>
    <div id="all-map" class="map"></div>
  </div>
</template>

<script>
import headBar from "../common/HeadBar.vue";
export default {
  name: "myMap",
  components: {
    headBar
  },
  data() {
    return {
      title: "",
      isleftarrow: "",
      transitionName: "fade",
      navShow: true
    };
  },
  computed: {

  },
  created() {
    
  },
  mounted() {
  },
  watch: {},
  methods: {
  }
};
</script>
<style scoped >
.map {
  width: 600px;
  height: 600px;
}
</style>