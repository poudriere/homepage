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
	    Poudrière est un collectif autogéré Lyonnais de personnes motivé.e.s pour héberger un ensemble d'outils informatiques mis à la disposition des associations, collectifs, organisations et luttes locales.
	</p>
	<p>
		Le collectif mets en avant l'anonymat en proposant des solutions accessibles qui garantissent un minimum de sécurité.
	</p>

	<H2> Quels sont les services proposés? </H2>
	<p>
	    Poudrière n'en est qu'à ses débuts et n'héberge pour l'instant qu'un serveur Matrix, appelé <HLink href="p0wder">p0wder</HLink> et un serveur mail, nommé <HLink href="fuse">Fuse</HLink>. D'autres services viendront avec le temps.
	</p>
	<p>
	    Si vous souhaitez suggérer une application, contactez le collectif au travers de <HLink href="p0wder">p0wder</Hlink> et nous verrons ce que nous pourrons faire.
	</p>
	
	<H2> Qu'est ce que c'est matrix? </H2>
	<p>
	    Matrix est une application de messagerie, un entredeux de Signal et Discord. Elle permet la communication par chat, mais aussi des appels entre différents utilisateurices. Matrix se rapproche de Signal avec sa communication chiffrée de bout à bout et ses fonctionnalités de chat privé et de groupes. Matrix emprunte aussi à Discord l'organisation en espaces, avec des channels, des threads et des groupes privés. À l'instar de ces deux applications, Matrix doit être hébergée localement sur un serveur, et non pas les serveurs de GAFAM comme Discord et Signal (ce dernier chiffre les données de bout en bout, mais beaucoup d'informations restent exploitable, sur des serveurs dont nous n'avons pas la main). 
	</p>
	<p>
	    Le tutoriel est disponible à -> <HLink href="/matrix"> ce lien </HLink>
	</p>

	<H2> Et les tutos? </H2>
	<p>
		Justement, voici une liste de tutoriels disponibles rédigés en partie par le collectif:
	</p>
	<List>
		<El> <HLink href="tuto/gpg">Comment créer sa clé gpg pour chiffrer fichiers, mails ou autre ...</HLink></El>
	</List>

    </div>
</template>
