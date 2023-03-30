<template>
<section class="calculadora">
  <SubDates />
  <br>
  <MultiDate />
</section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SubDates from "../components/CalculadoraLari/SubDates.vue";
import MultiDate from "../components/CalculadoraLari/MultiDate.vue";

export default defineComponent({
  name: 'CalculaDate',
  components: {
    SubDates,
    MultiDate
  }
})
</script>

<style scoped>
.calculadora {
  padding: 1.25rem;
}
</style>