<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Friends</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Actual Laboratory</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="w-screen mt-12 flex flex-col items-center text-center">
        <div class="border-2 border-white rounded-2xl p-4 text-2xl m-4 pb-12">
          <ion-input
            v-model="grossSalary"
            type="number"
            label="Enter Gross Salary"
            label-placement="floating"
            fill="outline"
            placeholder="Enter Gross Salary"
          ></ion-input>
        </div>

        <div class="flex flex-col w-[70%] text-2xl text-left font-light">
          <span>Gross Salary: {{ grossSalary }}</span>
          <span>Cash Advance: {{ cashAdvance }}</span>
          <span>Pag-Ibig: {{ pagIbig }}</span>
          <span>SSS: {{ SSS }}</span>
          <span>philHealth: {{ philHealth }}</span>
        </div>

        <IonButton class="m-4 w-[60%]" @click="calculateNetPay()">
          Calculate
        </IonButton>

        <h1 v-if="toggleView" :style="{ color: textColor }">{{ Netpay }}</h1>
      </div> </ion-content
    >/
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

const grossSalary = ref<number>(0);

const cashAdvance = ref<number>(5000);
const pagIbig = ref<number>(100);
// const totalDeductions = ref<number>(6550);

const philHealth = ref<number>(0);

const SSS = ref<number>(0);
const Netpay = ref<number>(0);

const toggleView = ref<boolean>(false);

let textColor = ref("");

function calculateNetPay() {
  philHealth.value = Number(grossSalary.value) * 0.0275;
  SSS.value = Number(grossSalary.value) * 0.045;

  const sumofDeductions =
    Number(cashAdvance.value) +
    Number(pagIbig.value) +
    Number(SSS.value) +
    Number(philHealth.value);

  Netpay.value = grossSalary.value - sumofDeductions;
  textColor.value = Netpay.value < 5000 ? "red" : "green";

  toggleView.value = !toggleView.value;
}
</script>
