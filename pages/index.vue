<script setup lang="ts">
definePageMeta({
    layout: "body"
})

useHead({
	title: "Collectif Poudrière",
	meta: [
		{ name: "description", content: "La page d'accueil du collectif poudrière" },
	]
})

useSeoMeta({
	title: "Collectif Poudrière",
	ogTitle: "Collectif Poudrière",
	description: "La page d'accueil du collectif poudrière",
	ogDescription: "La page d'accueil du collectif poudrière",
	ogImage: "https://poudriere.be/logo.png"
})
</script>

<template>
    <div>
	<H1> Qu'est ce que Poudrière? </H1>
	<p>
	    Poudrière est un collectif autogéré Lyonnais hébergeant un ensemble d'outils informatiques mis à la disposition des associations, collectifs, organisations et luttes locales.
	</p>
	<p>
		Le collectif mets en avant l'anonymat en proposant des solutions accessibles qui garantissent un minimum de sécurité.
	</p>

	<H2> Quels sont les services proposés? </H2>
	<p>
	    Poudrière n'en est qu'à ses débuts et propose pour l'instant :
    </p>

    <List>
        <El> <HLink href="p0wder">p0wder</HLink> : un serveur de discussion </El>
        <El> <HLink href="fuse">Fuse</HLink> : un service mail</El>
    </List>

	<p>
	    Si vous souhaitez suggérer une application, contactez le collectif au travers de p0wder et nous verrons ce que nous pourrons faire.
	</p>


	<H2> Rendre accessible le web libre et anonyme </H2>
	<p>
		Voici une liste de tutoriels disponibles rédigés en partie par le collectif:
	</p>
    <List>
        <El> <HLink href="tuto/gpg">Comment créer sa clé gpg pour chiffrer fichiers, mails ou autre ...</HLink></El>
    </List>

    </div>
</template>
