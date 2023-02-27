<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioCronometro />
      <!-- lista de tarefas -->
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioCronometro from "./components/FormularioCronometro.vue";

export default defineComponent({
  components: { BarraLateral, FormularioCronometro },
  name: "App",
});
</script>

<style></style>
