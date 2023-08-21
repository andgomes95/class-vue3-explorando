<template>
<section class="calculadora">
  <SubDates />
  <br>
  <MultiDate />
  <br>
  <DivDate />
  <br>
  <SumDates />
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SubDates from "../components/CalculadoraLari/SubDates.vue";
import MultiDate from "../components/CalculadoraLari/MultiDate.vue";
import DivDate from "../components/CalculadoraLari/DivDate.vue";
import SumDates from "../components/CalculadoraLari/SumDates.vue";

export default defineComponent({
  name: 'CalculaDate',
  components: {
    SubDates,
    MultiDate,
    DivDate,
    SumDates
  }
})
</script>

<style scoped>
.calculadora {
  padding: 1.25rem;
}
</style>