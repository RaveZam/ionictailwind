<template>
  <div>
    <ion-button shape="round" @click="submit">Default</ion-button>
  </div>
</template>

<script lang="ts">
import { IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { IonButton },

  methods: {
    submit() {
      console.log("click");
    },
  },
});
</script>
