<script setup lang="ts">
    definePageMeta({
	layout: "body-return"
    })

	useHead({
		title: "Matrix, qu'est ce que c'est?",
		meta: [
			{ name: "description", content: "Une rapide description du service matrix" },
		]
	})
</script>

<template>
    <div>
	<H1> Matrix, un service trop cool </H1>
	<p>
	    Matrix, c'est un standard de communication décentralisé. C'est à dire qu'il est concu pour être déployé sur un vaste ensemble de serveurs, iterconnectés par internet et interopérables (en gros comme si tout le monde était juste connecté a un gros serveur). Au dessus de ce standard a évolué une part importante de messagerie instantannée (comme sur Signal).
	</p>
	<p>
	    Matrix est organisé en plusieurs parties. Les "chambres" (appelées room) sont des groupes d'utilisateurs qui peuvent communiquer, un peu comme un channel sur discord ou comme un groupe sur Signal. <br> Les chambres peuvent être publiques ou privées (on aura alors la possibilité d'activer le chiffrement bout-à-bout dans ce cas ci). <br> Une communication entre deux utilisateurices utilise une chambre. <br> Enfin, il y a les espaces. Les espaces sont des groupes de chambres, qui permettent de faire un peu de tri ^^.
	</p>

	<H2> L'inscription </H2>
	<p>
	    Pour s'inscrire, on est obligé.e.s de passer par le site internet. Rendez vous sur <HLink href="https://element.poudriere.be/#/register">element.poudriere.be/#/register</HLink>. Entrez votre nom d'utilisateurice (lettres minuscules, chiffres, - et _) et votre mot de passe. Nous recommandons l'usage d'un gestionnaire de mot de passe tel que <HLink href="https://www.bitwaren.com">bitwarden.com</HLink> (gratuit). <br> Entrez ensuite votre code de cooptation (Token) et c'est bon :D.
	</p>

	<H2> La connection mobile </H2>
	<p>
	    C'est cool de pouvoir communiquer sur le pc mais c'est quand même plus pratique avec un smartphone... Pour palier à cela, installez simplement l'application Element (dispo Android et iOS). Cliquez sur se connecter.
	</p>
	<Danger>
	    Changez l'addresse du serveur pour <HLink href="https://pwd.poudriere.be">pwd.poudriere.be</Hlink>
	</Danger>
	<p>
	    Vous pouvez ensuite commencer des communications privées, créer et rejoindre des chambres créer votre espace. Have fun! :D
	</p>
    </div>
</template>
