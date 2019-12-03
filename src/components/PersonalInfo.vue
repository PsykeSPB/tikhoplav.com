<template>
  <div id="personal">
    <v-row justify="around" align="stretch">
      <v-col justify="evenly">
        <div>one</div>
        <div>one</div>
        <div>one</div>
      </v-col>
      <v-col>
        <div>two</div>
        <div>two</div>
        <div>two</div>
        <div>two</div>
      </v-col>
      <v-col>
        <div>three</div>
        <div>three</div>
        <div>three</div>
        <div>three</div>
        <div>three</div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import VRow from "./layout/VRow.vue";
import VCol from "./layout/VCol.vue";

export default {
  name: "PersonalInfo",
  components: {
    VRow,
    VCol,
  },
};
</script>
