<script setup lang="ts">
import { computed, ref } from 'vue';

const msg = ref("こんにちは世界！");
const isTextColorRed = ref(true);
const isBigColorBlue = ref(false);
const styles = ref({
    textColorRed: false,
    bgColorBlue: true
});

const comuptedStyles = computed((): { textColorRed: boolean, bgColorBlue: boolean; } => {
    // 乱数を利用して０か１を生成(textColorRed用)
    const randText = Math.round(Math.random());
    // textColorRedプロパティの値を表す変数をtrueで用意
    let textColorFlg = true;
    // 発生した乱数が０ならばfalseに変更
    if (randText == 0) {
        textColorFlg = false;
    }
    // 乱数を利用して０か１を生成(bgColorBlue用)
    const randBg = Math.round(Math.random());
    // bgColorBlueプロパティの値を表す変数をtrueで用意
    let bgColorFlg = true;
    // 発生した乱数が０ならばfalseに変更
    if (randBg == 0) {
        bgColorFlg = false;
    }
    //それぞれのプロパティの値をオブジェクトにして返す。
    return {
        textColorRed: textColorFlg,
        bgColorBlue: bgColorFlg
    };
});
</script>
<template>
    <section>
        <p :class="{ textColorRed: true, bgColorBlue: true }">
            {{ msg }}
        </p>
        <p :class="{ textColorRed: isTextColorRed, bgColorBlue: isBigColorBlue }">
            {{ msg }}
        </p>
        <p :class="{ texColorPink: true }">
            {{ msg }}
        </p>
        <p :class="{ 'text-color-pink': true }">
            {{ msg }}
        </p>
        <p class="textSize24" :class="{ textColorRed: isTextColorRed, bgColorBlue: isBigColorBlue }">
            {{ msg }}
        </p>
        <p class="textSize24" :class="styles">
            {{ msg }}
        </p>
        <p :class="comuptedStyles">
            {{ msg }}
        </p>
    </section>
</template>
<style scoped>
.textColorRed {
    color: red;
}

.text-color-pink {
    color: pink;
}

.bgColorBlue {
    background-color: blue;
}

.textSize24 {
    font-size: 24px;
}
</style>
