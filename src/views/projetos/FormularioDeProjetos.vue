<template>
  <section>
    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nomeDoProjeto" class="label"> Nome do Projeto </label>
        <input
          type="text"
          class="input"
          v-model="nomeDoProjeto"
          id="nomeDoProjeto"
        />
      </div>
      <div class="field">
        <button class="button" type="submit">Salvar</button>
      </div>
    </form>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import useNotificador from '@/hooks/notificador'
import { TipoNotificacao } from "@/interfaces/INotificacao";
import { ALTERAR_PROJETO, CADASTRAR_PROJETO } from "@/store/tipo-acoes";

export default defineComponent({
  name: "FormularioDeProjetos",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id == this.id
      );
      this.nomeDoProjeto = projeto?.nome || "";
    }
  },
  data() {
    return {
      nomeDoProjeto: "",
    };
  },
  setup() {
    const store = useStore();
    const { notificar } = useNotificador()
    return {
      store,
      notificar
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.dispatch(ALTERAR_PROJETO, {
          id: this.id,
          nome: this.nomeDoProjeto,
        }).then(() =>{ this.lidarConSucesso()})
      } else {
        this.store.dispatch(CADASTRAR_PROJETO, this.nomeDoProjeto)
        .then(() =>{ this.lidarConSucesso()})
      }
      
    },
    lidarConSucesso(){
      this.nomeDoProjeto = "";
      this.notificar(
        TipoNotificacao.SUCESSO,
        "Projeto Salvo",
        "Seu projeto foi salvo com sucesso"
      );
      this.$router.push("/projetos");
    }
  },
});
</script>
