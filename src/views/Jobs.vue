<template>
  <div class="jobs">
    <h1>Jobs page</h1>
    <h1>{{ job }}</h1>
    <Contact/>
       <b-alert show>Default Alert</b-alert>

    <b-alert variant="success" show>Success Alert</b-alert>

    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>Dismissible Alert!</b-alert>

    <b-button
      @click="showDismissibleAlert=true"
      variant="info"
      class="m-1"
    >Show dismissible alert ({{ showDismissibleAlert ? 'visible' : 'hidden' }})</b-button>
    <router-link to="/about">About</router-link>
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
  public showDismissibleAlert = false;
}

</script>