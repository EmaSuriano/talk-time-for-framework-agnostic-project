<template>
  <v-container fluid class="text-center">
    <v-row class="flex" justify="space-between">
      <v-col cols="2">
        <v-tooltip v-model="show" location="top">
          <template v-slot:activator="{ props }">
            <div v-bind="props" />
          </template>
          <span>Clicked!</span>
        </v-tooltip>

        <v-btn @click="show = !show" color="indigo"> <slot /> </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
};
</script>
