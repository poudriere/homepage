<script setup lang="ts">
    const _props = defineProps(["links"]);
    const props = JSON.parse(JSON.stringify(_props))

    console.log(props)
</script>

<template>
    <div class="qlinksCtn">
	<div v-for="l in props.links">
	    <HLink :href=l.href class="qlink">{{ l.title }}</HLink>
	</div>
    </div>
</template>
