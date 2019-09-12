<template>
  <div class="jobs">
    <h1>Jobs page</h1>
    <h1>{{ job }}</h1>
    <Contact/>
    <router-link to="/about">About</router-link> |
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import Contact from '@/components/contact.vue'; // @ is an alias to /src
import Contact from '../components/Contact.vue';

@Component({
  components: {
    Contact,
  },
})
export default class Jobs extends Vue {
  public job = 'jobs, jobs, jobs!';
}

</script>