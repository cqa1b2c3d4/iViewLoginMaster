<template>
	<div id="app">
    <main-header></main-header>
		<router-view></router-view>
    <main-footer></main-footer>
	</div>
</template>

<script>
  import mainHeader from "./components/main-header/mainHeader";
  import mainFooter from "./components/main-footer/mainFooter";
    export default {
        name: 'App',
        data:function () {
            return{

            }
        },
        components:{
            mainHeader,
            mainFooter
        }
    }
</script>

<style>
	#app {
		box-sizing: border-box;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: left;
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		background-color: #ffffff;
	}
</style>
