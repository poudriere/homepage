<script setup lang="ts">
    definePageMeta({
	layout: "body-return"
    })
</script>

<template>
        <div>
        <H1> Fuse, un serveur mail </H1>

        <p>
            Fuse est un serveur de mail, comme gmail, orange ou protonmail. 
        </p>

        <H2> Pourquoi Fuse? </H2>
        <p>
            À la diférence de ces derniers services, <b>Fuse ne demande pas de mail de confirmation, de captcha, ou d'informations personnelles</b>.
            Seul un token de cooptation est demandé.
        </p>
        <p>
            Fuze n'enregistre pas le token d'enregistrement. Cela veut dire que si vous créez votre compte avec tor, <b>vous êtes complètement anonyme</b> (en tout cas dans l'hypothèse ou le serveur est volé ou perquisitionné et que les voleurs arrivent a déchiffrer le système ou dans le cas d'une attaque informatique, pour plus de détail, envoyez un mp à pl4sma sur p0wder).
        </p>

        <H2> Comment créer un compte? </H2>
        <p>
            Il suffit d'aller sur <HLink href="reg_mail">la page d'enregistrement</HLink>, de renseigner:
        </p>
        <List>
            <El> Votre addresse mail (sans le @poudriere.be) </El>
            <El> Le nom que votre boite portera </El>
            <El> Votre mot de passe, 8 caractères minimum </El>
            <El> Votre token de cooptation </El>
        </List>

    </div>
</template>
