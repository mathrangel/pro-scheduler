<template>
  <v-stepper :items="['Service', 'Professional', 'Schedule', 'Check']">
    <template v-slot:[`item.1`]>
      <v-card title="Step One" flat>...</v-card>
    </template>
    <template v-slot:[`item.2`]>
      <v-card title="Step Two" flat>...</v-card>
    </template>
    <template v-slot:[`item.3`]>
      <v-card title="Step Three" flat>...</v-card>
    </template>
    <template v-slot:[`item.4`]>
      <v-card title="Step Three" flat>...</v-card>
    </template>
  </v-stepper>
</template>
