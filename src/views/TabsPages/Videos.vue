<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Laboratory Activity</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Laboratory Activity </ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="m-4 gap-y-4 flex flex-col">
        <div class="border-2 border-white text-2xl pb-4 px-4">
          <!-- <ion-input
            v-model="firstNumber"
            type="number"
            label="First Number"
            label-placement="floating"
            fill="outline"
            placeholder="Enter Number"
            style="
               {
                --padding-bottom: 20px;
              }
            "
          ></ion-input> -->

          <input
            v-model="firstNumber"
            type="number"
            placeholder="Enter First Number"
          />
        </div>
        <div class="border-2 border-white text-2xl pb-4 px-4">
          <!-- <ion-input
            v-model="secondNumber"
            type="number"
            label="Second Number"
            label-placement="floating"
            fill="outline"
            placeholder="Enter Number"
            style="
               {
                --padding-bottom: 20px;
              }
            "
          ></ion-input> -->

          <input
            v-model="secondNumber"
            type="number"
            placeholder="Enter First Number"
          />
        </div>
        <IonButton @click="calculateSum()"> Calculate </IonButton>

        <h1>{{ sum }}</h1>

        <div>
          <ion-input
            v-model="randomName"
            label="Enter Text"
            label-placement="floating"
            fill="outline"
            placeholder="Enter Text"
          ></ion-input>
          <IonButton @click="showName()"> Toggle View </IonButton>

          <h1 :class="toggleView ? 'opacity-100' : 'opacity-0'">
            {{ randomName }}
          </h1>
        </div>

        <div>
          <ion-input
            v-model="randomString"
            label="Enter Text"
            label-placement="floating"
            fill="outline"
            placeholder="Enter Text"
          ></ion-input>

          <h1 v-if="toggleView">
            {{ randomString }}
          </h1>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
} from "@ionic/vue";

import { ref } from "vue";

const firstNumber = ref<number>(0);
const secondNumber = ref<number>(0);
const sum = ref<number>(0);

let toggleView = ref<boolean>(false);

const randomName = ref<string>("");

function calculateSum() {
  sum.value = firstNumber.value + secondNumber.value;
  console.log(sum.value);
}

function showName() {
  toggleView.value = !toggleView.value;
}

const randomString = ref<string>("");
function setName() {}
</script>

Needed to convert the strings to a Number because ion input only accepts strings
Number(data.value) by default, Default input works normally as intended you can
use v-f="variable" to only show a specific element if the variable is true 3
style=" { --padding-bottom: 20px; } "
