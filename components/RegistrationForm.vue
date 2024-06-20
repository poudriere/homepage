<script setup lang="ts">
    import { object, string, type InferType } from "yup";
    import type { FormSubmitEvent } from "#ui/types";
    
    const toast = useToast();

    const schema = object({
        local_part: string().matches(/^[a-zA-Z\.\-\_\+0-9]+$/).max(64).required("Requis"),
        full_name: string().min(1).required("Requis"),
        password: string().matches(/^[a-zA-Z0-9\,\.\/\;\'\[\]\`\<\>\?\:\"\{\}\~\_\-\=\+]+$/).min(8, "Le mot de passe doit faire 8 caractères min.").required("Requis"),
        token: string().matches(/^[a-zA-Z0-9]+$/, "Le token n'est pas valide").required("Un token est nécéssaire")
    })

    const state = reactive({
        local_part: undefined,
        full_name: undefined,
        password: undefined,
        token: undefined
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
            <UInput v-model="state.local_part" />
        </UFormGroup>

        <UFormGroup label="Nom sur la boite" name="full_name" class="fgroup"  >
            <UInput v-model="state.full_name" />
        </UFormGroup>

        <UFormGroup label="Mot de passe" name="password" class="fgroup"  >
            <UInput v-model="state.password" type="password"/>
        </UFormGroup>

        <UFormGroup label="token" name="token" class="fgroup"  >
            <UInput v-model="state.token" />
        </UFormGroup>

        <UButton type="submit">
            Submit
        </UButton>
    </UForm>
</template>