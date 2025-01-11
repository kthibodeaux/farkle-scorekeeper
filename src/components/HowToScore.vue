<script setup>
import DieFace from './DieFace.vue'
import ManualDieFace from './ManualDieFace.vue'
</script>

<template>
  <div class="grid">
    <div>
      <DieFace side="5" /> = 50;
      <DieFace side="1" /> = 100<br />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" /> (not
      <DieFace side="1" />) = x*100<br />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" /> = 1,000
    </div>
    <div>
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" /> = 2,000<br />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" /> = 3,000<br />
      <DieFace side="1" />
      <DieFace side="2" />
      <DieFace side="3" />
      <DieFace side="4" />
      <DieFace side="5" />
      <DieFace side="6" />
      = 1,500
    </div>
    <div>
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="y" />
      <ManualDieFace side="y" />
      <ManualDieFace side="z" />
      <ManualDieFace side="z" /> = 1,500<br />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="y" />
      <ManualDieFace side="y" /> = 1,500<br />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="x" />
      <ManualDieFace side="y" />
      <ManualDieFace side="y" />
      <ManualDieFace side="y" /> = 2,500
    </div>
  </div>
</template>
