<template>
  <div>
    <h1 class="title">Multiplicacao por Horas</h1>
    <form class="formulario columns is-multiline" @submit.prevent="calcular">
      <div class="field column is-6">
        <label for="multiplicador" class="label"> Valor da Multiplicacao </label>
        <input
          type="number"
          class="input"
          v-model="multiplicador"
          id="multiplicador"
        />
      </div>
      <div class="field column is-6">
        <label for="timeToCalculate" class="label"> Hora para Calcular </label>
        <input
          type="time"
          class="input"
          v-model="timeToCalculate"
          id="timeToCalculate"
        />
      </div>
      <div class="field column is-offset-10">
        <button class="button" type="submit">Calcular</button>
      </div>
    </form>
    <br>
    <b>Resultado:</b>  {{ resultadoCalculo }}
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MultiDate',
  data (){
    return {
      multiplicador: 0,
      timeToCalculate: "",
      resultadoCalculo : ""
    }
  },
  methods: {
    calcular() {
      let dateInicioInDate = new Date(0,0,0,0,0,0)
      let dateToSub = new Date(0,0,0,0,0,0)
      let dateInicioArray = this.timeToCalculate.split(':')
      dateInicioInDate.setHours(parseInt(dateInicioArray[0]))
      dateInicioInDate.setMinutes(parseInt(dateInicioArray[1]))

      let resultDate = Math.abs(this.multiplicador * (dateInicioInDate.getTime() - dateToSub.getTime()))
      
      let seconds = Math.floor(resultDate / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);

      seconds = seconds % 60;
      minutes = minutes % 60;

      this.resultadoCalculo = hours + ":" + minutes
    },
  },
})
</script>
<style scoped>
</style>