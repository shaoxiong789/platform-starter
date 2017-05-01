<template>
    <div>
        <div class="color-list">
            <div class="color-item"
                 v-for="color in colors"
                 v-dragging="{ item: color, list: colors, group: 'color' }"
                 :key="color.text">{{color.text}}</div>
        </div>
        <div class="color-list">
            <div class="color-item"
                 v-for="color in colors"
                 v-dragging="{ item: color, list: colors, group: 'color' }"
                 :key="color.text">{{color.text}}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            colors: [{
                text: "Aquamarine"
            }, {
                text: "Hotpink"
            }, {
                text: "Gold"
            }, {
                text: "Crimson"
            }, {
                text: "Blueviolet"
            }, {
                text: "Lightblue"
            }, {
                text: "Cornflowerblue"
            }, {
                text: "Skyblue"
            }, {
                text: "Burlywood"
            }]
        }
    }
}
</script>
