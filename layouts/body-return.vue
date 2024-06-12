<script setup lang="ts">
    function goBack() {
	console.log("going back")
	useRouter().back()
    }
</script>

<template>
    <div id="goBackCtn">
	<div @click="goBack"> <- Revenir en arrière </div>
    </div>
    <div class="body">
	<slot />
    </div>
</template>
