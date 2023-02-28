<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioCronometro @aoSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaAFazer
          v-for="(tarefa, index) in tarefas"
          :key="index"
          :tarefa="tarefa"
        />
        <CaixaDeTarefas v-if="listaEstaVazia">
          You aren't productive today :(
        </CaixaDeTarefas>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioCronometro from "./components/FormularioCronometro.vue";
import TarefaAFazer from "./components/TarefaAFazer.vue";
import ITarefa from "./interfaces/ITarefa";
import CaixaDeTarefas from "./components/CaixaDeTarefas.vue";

export default defineComponent({
  components: {
    BarraLateral,
    FormularioCronometro,
    TarefaAFazer,
    CaixaDeTarefas,
  },
  name: "App",
  computed: {
    listaEstaVazia(): boolean {
      return this.tarefas.length == 0;
    },
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
  },
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
