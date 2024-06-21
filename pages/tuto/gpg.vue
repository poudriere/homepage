<script setup lang="ts">
    definePageMeta({
	    layout: "body-return"
    })
</script>

<template>
    <div>
        <H1> Créer une clé GPG </H1>

        <H2> Déjà, qu'est ce que c'est GPG? </H2>
        <p>
            GPG (pour GNU Privacy Guard) est un logiciel d'outils cryptographiques permettant de signer numériquement, s'authentifier, chiffrer (et déchiffrer), générer des clés etc...
        </p>
        <p>
            GPG est un outil polyvalent dans la lutte car il permet de sécuriser le contenu d'une discussion même à travers un canal publique. Il permets aussi de prouver qu'un communiqué émmane bien de vous et non d'un.e usurpateur.ice. 
        </p>

        <p>
            Nous allons voir au travers de ce tutoriel, comment générer une paire de clés qui permettront de faire ce que l'on appelle de la cryptographie asymétrique.
        </p>

        <H2> Chiffrement asymétrique? </H2>
        <p>
            Et oui, on entre dans l'air des ordinateurs, et ceux-ci sont très puissant à casser certains codes. Vous connaissez surement le <HLink href="https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage">chiffrement de César</HLink> qui consiste à "faire tourner" les lettres. On appelle ceci <b>un algorithme</b>. L'algorithme de César à besoin d'une <b>clé</b> qui corresponds à combien de lettres vous devez décaler. 
        </p>
        <p>
            Le chiffrement de César est dit symétrique. Cela veut dire que la clé pour chiffrer est la même qui est nécéssaire pour déchiffrer un message. 
        </p>
        <p>
            Cependant, cet algorithme est très facile à casser par analyse statistique. Ici nous allons nous intéresser a un algotithme beaucoup plus sécurisé: le <HLink href="https://fr.wikipedia.org/wiki/Chiffrement_RSA">RSA</HLink>. Le RSA est un algorithme dit asymétrique: <b>la clé de ciffrement est différente de la clé de déchiffrement</b>, et une clé ne peut pas être utilisée pour effectuer le travail de l'autre.
        </p>
        <p>
            Prennont un exemple concret: Alice et Bob. Alice et Bob veulent s'envoyer un message, sans qu'une personne tierce ne puisse la lire. Alice est la première à envoyer un message: elle chiffre son message avec la <b>clé publique</b> de Bob, une clé que tout le monde peut posséder. Cependant, personne à part Bob ne peut lire le message d'Alice. Et oui! Comme Bob est le seul détenteur de la <b>clé privée</b>, seul Bob peut alors lire le message de Alice, bien que tout le monde ai accès à la clé qui a été utilisée pour verrouiller le message.
        </p>

        <H2> Le problème de la clé privée </H2>
        <p>
            Une des failles de ce système repose sur le stockage de la clé privée. En effet, si la clé privée venait à être publiée par mégarde par Bob, tout le monde qui a enregistré les messages chiffrés d'Alice peut les lire en clair! Il faut donc trouver une solution pour sécuriser cette clé privée.
        </p>
        <List>
            <El> Une approche à cela est de chiffrer la clé privée elle-même avec un mot de passe que seul Bob connaît </El>
            <El> Une autre serait de stocker la clé sur une <b>clé physique</b> comme une <HLink href="https://www.yubico.com/">YubiKey</HLink>, chiffrée par mot de passe. Ceci évite alors que Bob se fasse pirater et que l'attaquant.e puisse voler la clé et enregistrer le mot de passe puisque la clé virtuelle est stockée sur l'objet physique </El>
            <El> Enfin faire attention, utiliser des logiciels fiables, ne pas cliquer sur des liens douteux etc... (utilisez tails c'est cool)</El>
        </List>

        <p>
            D'ailleurs ce guide est inspiré du très bon <HLink href="https://github.com/drduh/YubiKey-Guide">drduh/YubiKey-Guide</HLink> qui porte sur la configuration d'une telle Yubi Key.
        </p>

        <H2> Assez parlé, place à la pratique </H2>
        <p>
            Ce tutoriel est à destinée des utilisateur.ice.s de Linux. Si vous avez une distribution de Linux "simple", gpg devrait être installé de base sur votre ordinateur (il l'est sur Tails par exemple). Sinon, vous devriez savoir comment faire ;) (ou bien demandez de l'aide sur <HLink href="/p0wder">p0wder</HLink>). Enfin, ce tutoriel détaille une procédure qui n'est pas particulièrement sécurisée. La faire sur un ordinateur compromis c'est compromettre cette clé. Nous recommandons l'usage d'un second ordinateur, complètement débranché d'internet comme figure sur <HLink href="https://github.com/drduh/YubiKey-Guide">drduh/YubiKey-Guide</HLink> mais Tails très bien aussi.
        </p>
        
        <H3> Optionnel: Renforcez la sécurité de GPG</H3>

        <Bash>
            $ cd $GNUPGHOME <br>
            $ wget https://raw.githubusercontent.com/drduh/config/master/gpg.conf
        </Bash>

        <H3> Clé maîtresse </H3>
        <p>
            Une clé peut être signée digitalement par une autre clé. Elle devient alors une sous-clé de celle ci. Nous allons créer 4 clés. Une clé maitraîsse, et trois sous-clés: une pour l'authentification, une pour la signature et une pour le chiffrement. On pourraît créer une seule clé qui ferait tout mais globalement, ca serait moins sécurisé.
        </p>
        <p>
            On va commencer par prendre un bout de papier et y noter un mot de passe. On peut s'aider de générateurs comme <b>openssl</b> ou bitwarden. La clé devrait faire minimum 10-20 caractères et comprendre lettres, chiffres et caractères spéciaux. Une fois que cela est fait, on va créer la clé maîtresse:
        </p>

        <Bash>
            $ gpg --expert --full-generate-key
        </Bash>
        <List>
            <El> On vient choisir l'option 8: RSA (set your own capabilities)</El>
            <El> Puis on viens ne garder que la capacité de certification en tapant E puis entrée puis S puis entrée puis Q</El>
            <El> On vient ensuite spécifier la longueur de la clé. On conseille 4096 </El>
            <El> On renseigne ensuite la durée de vie de la clé. Pour celle-ci on va renseigner 0 (n'expire pas) </El>
            <El> Enfin, on entre y pour valider </El>
        </List>
        <p>
            GPG va ensuite vous demander de renseigner votre identité. Vous êtes bien enendu libre de mettre ce que vous souhaitez:
        </p>
        <List>
            <El> Renseignez le nom associé à la clé</El>
            <El> Entrez l'addresse mail associée à la clé </El>
            <El> Pressez entrée pour ne pas mettre de commentaire </El>
            <El> <b>Si vous avez fait une erreur</b>, pas de panique, entrez N, C, E, O ou Q respectivement pour modifier le nom, le commentaire, l'addresse mail, valider ou abandonner la procédure </El>
        </List>

        <p>
            Félicitations! Vous avez créé votre clé :D. Notez précieusement l'ID de cette clé. Sur les dernière lignes, vous devriez lire "pub    rsa4096/0x" avec 16 lettres en majuscules et chiffres. C'est votre ID de clé désormais.
        </p>

        <H3> Les sous clés </H3>
        <p>
            Dans cette étape, on va venir rajouter des sous-clés à la toute nouvelle clé qu'on vient de faire. Pour cela:
        </p>

        <Bash>
            $ gpg --expert --edit-key VOTRE_ID_DE_CLÉ
        </Bash>

        <p>
            Suivez ensuite ces opérations:
        </p>

        <List>
            <El> --- clé de signature --- </El>
            <El> Tapez "addkey" pour ajouter une clé</El>
            <El> Choisissez 4: RSA (sign only) </El>
            <El> Choisissez une clé de 4096 bits</El>
            <El> Choisissez une durée de validité de un ou deux ans </El>
            <El> Confirmez avec y </El>
            <El> Confirmez encore avec y </El>
            <El> --- clé de chiffrement --- </El>
            <El> Tapez "addkey" pour ajouter une clé</El>
            <El> Choisissez 6: RSA (encrypt only) </El>
            <El> Idem: 4096, 1 ou 2 an(s), oui puis oui </El>
            <El> --- clé d'authentification --- </El>
            <El> Tapez "addkey" pour ajouter une clé</El>
            <El> Choisissez 8: RSA (set your own capabilities)</El>
            <El> Spécifiez uniquement l'authentification en entrant S puis entrée puis E puis entrée puis A puis entrée puis Q puis entrée </El>
            <El> Idem: 4096, 1 ou 2 an(s), oui puis oui </El>
            <El> --- sauvegarde --- </El>
            <El> Enfin, tapez save (puis entrée) pour enregistrer votre clé :D</El>
        </List>

        <H3> Félicitations </H3>
        <p>
            Vous pouvez taper la commande suivante afin de vérifier vos clés:
        </p>

        <Bash>
            $ gpg -K <br>
/tmp.FLZC0xcM/pubring.kbx<br>
-------------------------------------------------------------------------<br>
sec   rsa4096/0xFF3E7D88647EBCDB 2017-10-09 [C]<br>
      Key fingerprint = 011C E16B D45B 27A5 5BA8  776D FF3E 7D88 647E BCDB<br>
uid                            Dr Duh [doc@duh.to]<br>
ssb   rsa4096/0xBECFA3C1AE191D15 2017-10-09 [S] [expires: 2018-10-09]<br>
ssb   rsa4096/0x5912A795E90DD2CF 2017-10-09 [E] [expires: 2018-10-09]<br>
ssb   rsa4096/0x3F29127E79649A3D 2017-10-09 [A] [expires: 2018-10-09]<br>
        </Bash>

        <p>
            Vous pouvez maintenant passer à <HLink href="/gpg_usage">l'utilisation de GPG</HLink>
        </p>
    </div>
</template>