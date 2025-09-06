<script setup lang="ts">
import { ref } from 'vue';

const randValue = ref("まだです。");
const onButtonClick = (): void => {
  const rand = Math.round(Math.random() * 10);
  randValue.value = String(rand);
}

const mousePointerX = ref(0);
const mousePointerY = ref(0);
const onImgMousemove = (event: MouseEvent): void => {
  mousePointerX.value = event.offsetX;
  mousePointerY.value = event.offsetY;
};

const pBcolor = ref("white");
const onPCllick = (bcolor: string): void => {
  pBcolor.value = bcolor;
};

const pMsg = ref("イベント前（ここをクリック）");
const pBcolorEvent = ref('white');
const onPCllickWithEvent = (bcolor: string, event: MouseEvent): void => {
  pBcolor.value = bcolor;
  pMsg.value = event.timeStamp.toString();
};

const msg = ref('未送信');
const onFormSubmit = (): void => {
  msg.value = "送信されました。"
};

const msg2 = ref('まだです。');
const onEnterKey = (): void => {
  msg2.value = "エンターキーが押されなした。"
};
const onRightButtonClick = (): void => {
  msg2.value = "ボタンが右クリックされました。"
};
const onShiftClick = (): void => {
  msg2.value = "シフトを押しながらクリックされました。"
};
</script>

<template>
  <section>
    <button @click="onButtonClick">クリック</button>
    <p>クリックの結果:{{ randValue }}</p>
  </section>
  <section>
    <img src="./assets/logo.svg" alt="Vueのロゴ" width="200" @mousemove="onImgMousemove">
    <p>ポインタの位置:x={{ mousePointerX }}; y={{ mousePointerY }}</p>
  </section>
  <section>
    <p @click="onPCllick('red')" :class="{ backgroundColor: pBcolor }">ここをクリックすると背景色が変わります。</p>
  </section>
  <section>
    <p @click="onPCllickWithEvent('green', $event)" :class="{ backgroundColor: pBcolorEvent }">{{ pMsg }}</p>
  </section>
  <section>
    <form action="#" @submit.prevent="onFormSubmit">
      <input type="text" required>
      <button type="submit">送信</button>
    </form>
    <p>{{ msg }}</p>
  </section>
  <section>
    <p>{{ msg2 }}</p>
    <input type="text" v-on:keydown.enter="onEnterKey"><br />
    <button @click.right="onRightButtonClick">右クリック</button><br />
    <button @click.shift="onShiftClick">シフトを押しながらクリック</button><br />
  </section>
</template>

<style>
</style>
