<template>
  <div>
    <h1 class="title">Diferenca das Horas</h1>
    <form @submit.prevent="calcular">
      <div class="field">
        <label for="dateInicio" class="label"> Hora Inicio </label>
        <input
          type="time"
          class="input"
          v-model="dateInicio"
          id="dateInicio"
        />
      </div>
      <div class="field">
        <label for="dateFim" class="label"> Hora Fim </label>
        <input
          type="time"
          class="input"
          v-model="dateFim"
          id="dateFim"
        />
      </div>
      <div class="field">
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
  name: 'SubDate',
  data (){
    return {
      dateInicio:"",
      dateFim: "",
      resultadoCalculo : ""
    }
  },
  methods: {
    calcular() {
      let dateInicioInDate = new Date(0,0,0,0,0,0)
      let dateInicioArray = this.dateInicio.split(':')
      dateInicioInDate.setHours(parseInt(dateInicioArray[0]))
      dateInicioInDate.setMinutes(parseInt(dateInicioArray[1]))

      let dateFimInDate = new Date(0,0,0,0,0,0,0)
      let dateFimArray = this.dateFim.split(':')
      dateFimInDate.setHours(parseInt(dateFimArray[0]))
      dateFimInDate.setMinutes(parseInt(dateFimArray[1]))
      if(dateFimInDate < dateInicioInDate)
        dateFimInDate.setDate(dateFimInDate.getDate() + 1)

      let resultDate = new Date(0,0,0,0,0,0)
      resultDate.setMilliseconds(Math.abs(dateFimInDate.getTime() - dateInicioInDate.getTime()))
      console.log(resultDate)

      this.resultadoCalculo = resultDate.getHours() + 
        ":" + resultDate.getMinutes()
    },
  },
})
</script>
<style scoped>
</style>