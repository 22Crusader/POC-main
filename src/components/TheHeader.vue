<template>
    <header class="header">
        <div class="header__nav">
            <nuxt-link
                to="/customers"
                class="header__nav-link"
            >
                Customers
            </nuxt-link>
        </div>
        <div class="header__user">
            <div
                v-if="!client.authorized"
                class="header__user-button"
                @click="login"
            >
                Login
            </div>
            <div
                v-else
                class="header__user-data"
            >
                Username
            </div>
        </div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from '#imports'

    import { useClientStore } from '@/submodules/auth/stores/client'

    export default defineComponent({
        setup (_props) {
            const client = useClientStore()

            const login = (): void => {
                client.setAuthorized(true)
                client.setRole('admin')
            }

            return {
                client,
                login
            }
        }
    })
</script>

<style lang="scss" scoped>
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        height: 6rem;
        padding: 0 2rem;
        border-bottom: 1px solid darkgrey;

        &__nav {
            //...
        }

        &__nav-link {
            color: white;
        }

        &__user {
            //...
        }

        &__user-button {
            cursor: pointer;
        }
    }
</style>
