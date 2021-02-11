<template>
  <div id="ttWindow" class="absolute top-0 bottom-0 left-0 right-0 z-10 text-primary">
    <!-- MAP-CONTAINER -->
    <!-- <gmap-map ref="mapRef" class="fixed h-full w-full" :options="mapOptions" :center="mapCenter" :zoom="mapZoom"> </gmap-map> -->

    <!-- ROUTER-VIEW -->
    <router-view v-slot="{ Component }">
      <transition
        enter-active-class="transition-all duration-200 delay-100"
        enter-from-class="opacity-0 scale-100"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition-all duration-100"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-100"
        appear
      >
        <component :is="Component" class="z-40" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, provide, onMounted } from "vue";
import { useRoute } from "vue-router";
import ttMapOptions from "./map.config";
import { store } from "./store";

export default defineComponent({
  name: "App",
  components: {},
  setup() {
    const mapRef = ref();
    provide("mapRef", mapRef);

    console.log(process.env);

    const mapCenter = computed(() => store.state.mapCenter);
    const mapZoom = computed(() => store.state.mapZoom);
    const mapOptions = ttMapOptions;
    const route = useRoute();
    const routeName = computed(() => route.name);
    const isLoading = computed(() => store.state.isLoading);

    return {
      mapOptions,
      mapCenter,
      mapZoom,
      mapRef,
      routeName,
      isLoading,
    };
  },
});
</script>
