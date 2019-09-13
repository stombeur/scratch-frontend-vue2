<template>

<!-- <template>
  <div id="jos">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/jobs">Jobs</router-link>
    </div>
    <router-view/>
  </div>
</template> -->

  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view/>
    </v-content>
    <v-bottom-navigation
    v-model="bottomNav"
  >
    <v-btn value="home">
       <router-link to="/"><span>Home</span><v-icon>mdi-history</v-icon></router-link> 
    </v-btn>

    <v-btn value="about">
      <router-link to="/about"><span>About</span><v-icon>mdi-heart</v-icon></router-link> 
    </v-btn>

    <v-btn value="jobs">
      <router-link to="/jobs"><span>Jobs</span><v-icon>mdi-map-marker</v-icon></router-link> 
    </v-btn>
  </v-bottom-navigation>
  </v-app>
  
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
  },
  data: () => ({
    //
  }),
});
</script>
