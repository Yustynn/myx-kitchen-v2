<template>
    <v-layout full-width class="outer">
        <v-container>
            <h2>Drink Dispenser</h2>
            <v-flex justify-center class="btn-container">
                <BtnAlt
                        class="btn"
                        @click="registerSlot(slot)"
                        :key="slot"
                        v-for="slot in 4"
                >
                    Slot {{ slot }}
                </BtnAlt>

            </v-flex>
        </v-container>
    </v-layout>
</template>

<script>
    import { BtnAlt } from "@/components";
    import { registerSlot } from '@/api/dustbin'

    export default {
        name: 'DustbinMenu',
        components: { BtnAlt },
        methods: { registerSlot }
    }
</script>

<style scoped>
    h2 {
        color: white;
        font-size: 28px;
        text-align: center;
        text-transform: uppercase;
    }

    .btn-container {
        display: flex;
        flex-direction: row;
    }

    .outer {
        background-color: #1565C0;
    }
    
    .btn {
        background-color: white;
    }
</style>
