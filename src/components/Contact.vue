<template>
  <div class="contact">
    <p>
      See our website for more details <a href="https://www.pencil42.be/jobs">PENCIL42 jobs</a>.
    </p>
    <p>Kanye says: {{quote}}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { KanyeRest } from '../services/KanyeRest';

@Component
export default class Contact extends Vue {

    public kanye = new KanyeRest()
    public quote = "";

    mounted() {
        this.kanye.getQuote().then(data => {
            this.quote = data.quote;
        });
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #b942af;
}
</style>
