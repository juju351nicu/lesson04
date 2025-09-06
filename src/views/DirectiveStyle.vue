<script setup lang="ts">
import { computed, ref } from 'vue';

const url = ref("https://vue.js.org/");

const widthOrHeight = ref("height");
const widthOrHeightValue = ref(100);

const imgAttributes = ref({
    src: "/images/logo.svg",
    alt: "Vueのロゴ",
    width: 75,
    height: 75
});

const msg = ref("こんにちは世界！");
const msgTextRed = ref("red");
const msgTextColor = ref("white");
const msgBgColor = ref("black");
const msgStyles = ref({
    color: "white",
    backgroundColor: "black"
});
const msgStyles2 = ref({
    fontSize: "24pt"
});
const msgStyles3 = ref({
    color: "pink",
    fontSize: "24pt"
});
const textSize = computed((): string => {
    const size = Math.round(Math.random() * 25) + 10;
    return `${size}pt`
});
const isSendButtonDisabled = ref(true);
</script>
<template>
    <section>
        <p><a :href="url" target="_blank">Vue.jsのサイト</a></p>
        <p><a :href="url + 'guide/introduction.html'" target="_blank">Vue.jsのガイドのページ</a></p>
        <p><img src="/src/assets/logo.svg" alt="VueLogo" :[widthOrHeight]="widthOrHeightValue"></p>

        <p><img :="imgAttributes"></p>
        <p><img :="imgAttributes" title="ロゴです。"></p>
        <p><img :="imgAttributes" alt="ロゴです。!"></p>
    </section>
    <section>
        <p :class="{ color: msgTextRed }">
            {{ msg }}
        </p>
        <p :class="{ color: 'pink' }">
            {{ msg }}
        </p>
        <p :class="{ fontSize: textSize }">
            {{ msg }}
        </p>
        <p :class="{ color: msgTextColor, backgroundColor: msgBgColor }">
            {{ msg }}
        </p>
        <p :class="{ color: msgTextColor, 'backgroundColor': msgBgColor }">
            {{ msg }}
        </p>
        <p :class="msgStyles">
            {{ msg }}
        </p>
        <p :class="[msgStyles, msgStyles2]">
            {{ msg }}
        </p>
        <p :class="[msgStyles, msgStyles3]">
            {{ msg }}
        </p>
        <p :class="[msgStyles3, msgStyles]">
            {{ msg }}
        </p>
    </section>
    <p><button type="button" :disabled="isSendButtonDisabled">送信</button></p>
</template>
