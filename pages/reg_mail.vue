<script setup lang="ts">
    definePageMeta({
		layout: "body-return"
    })
</script>

<template>
	<div>
		<UContainer>
			<H1> Créer une addresse mail </H1>
			<div class="aligned">
				<div class="formContainer">
					<RegistrationForm />
				</div>
			</div>
		</UContainer>

		<UNotifications />
	</div>
</template>
