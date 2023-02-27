<template>
  <div class="box">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulario para criacao de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual terafa voce deseja iniciar?"
          v-model="descricao"
        />
      </div>
      <div class="column">
        <TemporizadorButtons @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorButtons from "./TemporizadorButtons.vue";
export default defineComponent({
  components: { TemporizadorButtons },
  name: "FormularioCronometro",
  data() {
    return {
      descricao: "",
    };
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      console.log(this.descricao + tempoDecorrido);
      this.descricao = "";
    },
  },
});
</script>

<style></style>
