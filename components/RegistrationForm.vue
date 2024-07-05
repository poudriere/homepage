<script setup lang="ts">
    import { object, string, type InferType, addMethod } from "yup";
    import type { FormSubmitEvent } from "#ui/types";

    addMethod(string, "matchesReactive", function (ref, key, err) {
	return this.test("test-card-type", err, function (value) {
	    if (value != ref[key]) {
	    console.log({ref, value})
		return this.createError({ path: this.path, message: err })
	    } else {
		return true
	    }
	})
    })

    const toast = useToast();

    const state = reactive({
        local_part: undefined,
        full_name: undefined,
        password: undefined,
	password2: undefined,
        token: undefined
    })

    const schema = object({
        local_part: string().matches(/^[a-zA-Z\.\-\_\+0-9]+$/).max(64).required("Requis"),
        full_name: string().min(1).required("Requis"),
        password: string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/, "Le mot de passe doit contenir une lettre minuscule et majuscule, un chiffre, un caractère spécial et au moins 8 caractères").min(8, "Le mot de passe doit faire 8 caractères min.").required("Requis"),
	password2: string().matchesReactive(state, "password", "Le mot de passe ne corresponds pas").required("Ce champ est nécéssaire"),
        token: string().matches(/^[a-zA-Z0-9]+$/, "Le jeton n'est pas valide").required("Un jeton est nécéssaire")
    })

    type Schema = InferType<typeof schema>

    async function onSubmit (event: FormSubmitEvent<Schema>) {
        // Do something with event.data
        const { local_part, full_name, password, token } = event.data;

        function handleResponse(resp: any) {
            console.log({resp});
            const code = resp.statusCode;

            if(code == 400) {
                // Mailbox probably already exists
                toast.add({ title: "Impossible de créer", description: "Peut être que cette boite mail existe déjà"})
            } else if(code == 401) {
                // Wrong token
                toast.add({ title: "Token invalide" })
            } else if(code == 200 || resp == "Ok") {
	    	    toast.add({ title: "Email crée avec succès" })
		
		        setTimeout(() => navigateTo("/fuse"), 5000);
	        } else {
		        toast.add({ title: `Erreur: CODE: ${code}` });
	        }
        }

        $fetch('/api/register', {
            method: 'POST',
            body: {
                local_part, full_name, password, token
            }
        }).then((resp) => handleResponse(resp))
            .catch((resp) => handleResponse(resp))
    }
</script>

<template>
    <UForm :schema="schema" :state="state" @submit="onSubmit" class="form">
        <UFormGroup label="Email (sans le @poudriere.be)" name="local_part" class="fgroup"  >
            <UInput v-model="state.local_part">
		<template #trailing>
		    <span class="grey">@poudriere.be</span>
		</template>
	    </UInput>
        </UFormGroup>

        <UFormGroup label="Nom sur la boite" name="full_name" class="fgroup"  >
            <UInput v-model="state.full_name" />
        </UFormGroup>

        <UFormGroup label="Mot de passe" name="password" class="fgroup"  >
            <UInput v-model="state.password" type="password"/>
        </UFormGroup>

        <UFormGroup label="Répétez le mot de passe" name="password2" class="fgroup"  >
            <UInput v-model="state.password2" type="password"/>
        </UFormGroup>
        
	<UFormGroup label="token" name="token" class="fgroup"  >
            <UInput v-model="state.token" />
        </UFormGroup>

        <UButton type="submit">
            Submit
        </UButton>
    </UForm>
</template>
