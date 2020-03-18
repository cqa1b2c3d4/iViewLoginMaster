<template>
  <div>
    <my-message :props-list="propsList" >
      <template v-slot:slot1>这是slot1</template>
      <template v-slot:slot2>这是slot2</template>
    </my-message>
  </div>
</template>

<script>

    import MyMessage from "./components/MyMessage";

    export default {

        name: "PageMyMessage",

        data(){
            return{
                slotTestData: 'slot test data in parent',
                propTesData: 'prop test data in parent',
                propsList: {
                    propA:'prop object a',
                    propB:'prop object b',
                    propC:'prop object c',
                    propD:'prop object d',
                    propE:'prop object e'
                }
            }
        },
        components:{

            MyMessage
        }
    }
</script>

<style scoped>

</style>
