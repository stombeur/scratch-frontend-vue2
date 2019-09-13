<template>
  <div class="contact">
    <p>
      See our website for more details
      <a href="https://www.pencil42.be/jobs">PENCIL42 jobs</a>.
    </p>
    <p>Kanye says: {{quote}}</p>
    <b-button @click="getQuote" variant="info" class="m-1">Kanye Gets!</b-button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import { KanyeRest } from "../services/KanyeRest";

@Component
export default class Contact extends Vue {
  public kanye = new KanyeRest();
  public quote = "";
  public getQuote() {
    this.kanye.getQuote().then((data) => {
      this.quote = data.quote;
    });
  }

  private mounted() {
    this.getQuote();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #b942af;
}
</style>
