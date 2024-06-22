<script setup lang="ts">
    definePageMeta({
		layout: "body-return"
    })


    useHead({
	title: "Création d'une boite mail"
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
