<template>
  <section>
    <strong class="cronometro">
      {{ tempoDecorrido }}
    </strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CronometroExibicao",
  props: {
    tempoEmSegundos: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000)
        .toISOString()
        .substring(11, 19);
    },
  },
});
</script>

<style>
.cronometro {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
