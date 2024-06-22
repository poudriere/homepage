<script setup lang="ts">
    definePageMeta({
	layout: "body-return"
    })


    useHead({
	title: "Fuse"
    })

    const links = [{ title: "client_web", href: "https://fuse.poudriere.be/SOGo" }, { title: "creation_compte", href: "/reg_mail" }]
</script>

<template>
        <div>
        <H1 class="qlinks"> Fuse, un serveur mail </H1>
	<QLinks :links=links /> 

        <p>
            Fuse est un service gratuit de boite mail, comme gmail, orange ou protonmail. 
        </p>

        <H2> Pourquoi Fuse? </H2>
        <p>
            À la diférence de ces derniers services, <b>Fuse ne demande pas de mail de confirmation, de captcha, ou d'informations personnelles</b>.
            Seul un jeton de cooptation est demandé.
        </p>
        <p>
	Fuze n'enregistre pas le token d'enregistrement. De plus, Fuze n'enregistre pas le jeton de cooptation utilisé. Une fois enregistré.e, impossible de savoir qui a coopté qui. Si vous avez créez votre compte avec tor, <b>l'email est complètement anonyme</b>. Cela donne une bonne base pour pouvoir le partager à des gens et contrôler qui sait réellement à qui appartient le mail.
        </p>

        <H2> Comment créer un compte? </H2>
        <p>
            Il suffit d'aller sur <HLink href="reg_mail">la page d'enregistrement</HLink>, de renseigner:
        </p>
        <List>
            <El> Votre addresse mail (sans le @poudriere.be) </El>
            <El> Le nom que votre boite portera </El>
            <El> Votre mot de passe, 8 caractères minimum </El>
            <El> Votre jeton de cooptation </El>
        </List>

    </div>
</template>
