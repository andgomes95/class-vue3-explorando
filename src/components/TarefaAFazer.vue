<template>
  <CaixaDeTarefas>
    <div class="columns">
      <div class="column is-4">{{ tarefa.descricao || "No Name Task" }}</div>
      <div class="column is-3">
        {{ tarefa.projeto?.nome || 'N/D' }}
      </div>
      <div class="column">
        <CronometroExibicao :tempoEmSegundos="tarefa.duracaoEmSegundos" />
      </div>
    </div>
  </CaixaDeTarefas>
</template>

<script lang="ts">
import ITarefa from "../interfaces/ITarefa";
import { defineComponent, PropType } from "vue";
import CronometroExibicao from "./CronometroExibicao.vue";
import CaixaDeTarefas from "./CaixaDeTarefas.vue";
export default defineComponent({
  name: "TarefaAFazer",
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
  components: {
    CronometroExibicao,
    CaixaDeTarefas,
  },
});
</script>

<style scoped></style>
