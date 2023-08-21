<template>
  <div>
    <h1 class="title">Soma de Horas</h1>
    <h6>
      Insira as datas no formato HH:mm. Se desejar subtraçao, insira o simbolo
      "-" para indicar a operacao.
    </h6>
    <form class="formulario columns is-multiline" @submit.prevent="calcular">
      <div class="field column is-6">
        <label for="dateInicio" class="label"> Hora Inicio </label>
        <input type="text" class="input" v-model="dateInicio" id="dateInicio" />
      </div>
      <div class="field column is-6">
        <label for="dateFim" class="label"> Hora Fim </label>
        <input type="text" class="input" v-model="dateFim" id="dateFim" />
      </div>
      <div class="field column is-offset-10">
        <button class="button" type="submit">Calcular</button>
      </div>
    </form>
    <br />
    <b>Resultado:</b> {{ resultadoCalculo }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SumDate",
  data() {
    return {
      dateInicio: "",
      dateFim: "",
      resultadoCalculo: "",
    };
  },
  methods: {
    calcular() {
      if (
        !this.dateInicio.match(/^(-)?\d+:\d{2}$/) ||
        !this.dateFim.match(/^(-)?\d+:\d{2}$/)
      ) {
        alert("Formato de hora inválido. Use o formato HH:mm.");
        return "";
      }

      const [horas1, minutos1] = this.dateInicio.split(":").map(Number);
      const [horas2, minutos2] = this.dateFim.split(":").map(Number);

      let totalMinutos = minutos1 + minutos2;
      let horasTotais = horas1 + horas2;

      if (totalMinutos >= 60) {
        totalMinutos -= 60;
        horasTotais += 1;
      } else if (totalMinutos < 0) {
        totalMinutos += 60;
        horasTotais -= 1;
      }

      const diasAdicionais = Math.floor(horasTotais / 24);
      horasTotais %= 24;

      horasTotais += diasAdicionais * 24;

      const sinal = horasTotais < 0 ? "-" : "";
      this.resultadoCalculo = `${sinal}${String(Math.abs(horasTotais)).padStart(
        2,
        "0"
      )}:${String(totalMinutos).padStart(2, "0")}`;
    },
  },
});
</script>
<style scoped></style>
