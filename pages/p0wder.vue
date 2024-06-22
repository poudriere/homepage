<script setup lang="ts">
    definePageMeta({
		layout: "body-return"
    })

	useHead({
		title: "p0wder",
		meta: [
			{ name: "description", content: "Description de p0wder, le serveur matrix hébergé chez Poudrière." },
		]
	})
</script>

<template>
    <div>
	<H1> p0wder, un lieu d'échange </H1>
    <p>
        p0wder est un serveur <HLink href="https://matrix.org">Matrix</HLink> hébergé à Lyon par nos soins. Le serveur n'est disponible qu'en cooptation.
    </p>

	<H2> Qu'est ce que c'est Matrix? </H2>
	<p>
	    Matrix est un protocole libre de messagerie, un entredeux de Signal et Discord. Elle permet la communication par chat, mais aussi des appels entre différents utilisateurices. Matrix se rapproche de Signal avec sa communication chiffrée de bout à bout et ses fonctionnalités de chat privé et de groupes. Matrix emprunte aussi à Discord l'organisation en espaces, avec des channels, des threads et des groupes privés.
    </p>

	<H2> L'inscription </H2>
	<p>
	    L'inscription se fait sur <HLink href="https://element.poudriere.be/#/register">element.poudriere.be/#/register</HLink>. Entrez votre nom d'utilisateurice (lettres minuscules, chiffres, - et _) et votre mot de passe. Nous recommandons l'usage d'un gestionnaire de mot de passe tel que <HLink href="https://www.bitwaren.com">bitwarden.com</HLink> (gratuit). <br> Entrez ensuite votre code de cooptation (Token) pour valider la création.
	</p>

	<H2> La connection mobile </H2>
	<p>
	    Il existe plusieurs applications pour se connecter à des serveurs Matrix sur téléphone. Nous vous recommandons <b>Element</b> (dispo Android et iOS). Cliquez sur se connecter.
	</p>
	<Danger>
	    Changez l'addresse du serveur pour <HLink href="https://pwd.poudriere.be">pwd.poudriere.be</Hlink>
	</Danger>
	<p>
	    Vous pouvez ensuite explorer les canaux publics, discuter avec des personnes et découvrir les espaces.
	</p>

	<H2> Approfondissements</H2>
	<p>
	    Matrix est un standard de communication décentralisé. C'est à dire qu'il est concu pour être déployé sur un vaste ensemble de serveurs, interconnectés par internet et interopérables (en gros comme si tout le monde était juste connecté a un gros serveur). Au dessus de ce standard a évolué une part importante de messagerie instantannée (comme sur Signal).
	</p>
	<p>
	    Matrix est organisé en plusieurs parties. Les "chambres" (appelées room) sont des groupes d'utilisateurs qui peuvent communiquer, un peu comme un channel sur Discord ou comme un groupe sur Signal. <br> Les chambres peuvent être publiques ou privées (on aura alors la possibilité de renforcer la sécurité en activant le chiffrement bout-à-bout dans ce cas ci). <br> Enfin, il y a les espaces. Les espaces sont des groupes de chambres, qui permettent d'organiser un ensemble de discussions (l'équivalent des serveurs sur Discord). Ces ensembles sont très pratiques pour permettre à des organisations, des associations ou des groupes affinitaires de s'organiser.
	</p>
    </div>
</template>
