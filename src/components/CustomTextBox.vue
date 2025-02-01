<template>
  <div class="flex flex-col w-1/2">
    <h1>Input Value: {{ username }}</h1>
    <ion-textarea
      label="Solid textarea"
      label-placement="floating"
      fill="solid"
      placeholder="Enter text"
      style="--padding-top: 12px"
      @input="handleInput"
    ></ion-textarea>

    <ion-button @click="logInput"> Submit </ion-button>
  </div>
</template>

<script lang="ts">
import { IonTextarea } from "@ionic/vue";
import { defineComponent } from "vue";
import { IonButton } from "@ionic/vue";

export default defineComponent({
  components: { IonTextarea, IonButton },

  data() {
    return {
      username: "",
    };
  },

  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      this.username = target.value;
    },

    logInput() {
      console.log(this.username);
    },
  },
});
</script>
