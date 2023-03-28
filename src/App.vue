<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'modo-escuro': modoEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
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
      modoEscuroAtivo: false,
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema(modoEscuroAtivo: boolean) {
      this.modoEscuroAtivo = modoEscuroAtivo;
    },
  },
});
</script>

<style>
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.lista {
  padding: 1.25rem;
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
