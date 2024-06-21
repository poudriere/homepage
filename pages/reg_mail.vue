<script setup lang="ts">
    definePageMeta({
		layout: "body-return"
    })
</script>

<template>
	<div>
		<UContainer>
			<H1> Créer une addresse mail </H1>
			    <div class="formContainer">
				    <RegistrationForm />
			    </div>
		</UContainer>

		<UNotifications />
	</div>
</template>
