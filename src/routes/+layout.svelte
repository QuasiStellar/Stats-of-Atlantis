<script lang="ts">
	import '../app.postcss';
  import { fly } from 'svelte/transition'
  import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
  import { page } from "$app/stores";

  import smallLogoImage from '$lib/images/small_logo.png'

  export let data

  $: activeUrl = $page.url.pathname
</script>

<Navbar class="fixed z-50 top-0 border-b bg-dark-800 border-b-dark-600">
  <NavBrand href="/">
    <img src={smallLogoImage} class="mr-3 h-6 sm:h-9" alt="SoA Logo" />
    <span class="whitespace-nowrap text-2xl font-semibold text-white">Stats of Atlantis</span>
  </NavBrand>
  <NavHamburger class="text-dark-400 hover:bg-dark-600"/>
  <NavUl
    {activeUrl}
    classUl="border-dark-600 bg-dark-800"
    activeClass="hover:text-white hover:bg-dark-700 font-semibold"
    nonActiveClass="hover:text-white hover:bg-dark-700 font-semibold"
  >
    <NavLi class="text-dark-400" href="/">Catalogue</NavLi>
    <NavLi class="text-dark-400" href="/builder">Card Builder</NavLi>
    <NavLi class="text-dark-400" href="/onward/builder">Onward</NavLi>
    <NavLi class="text-dark-400" href="/about">About</NavLi>
  </NavUl>
</Navbar>

{#key data.url}
  <div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
    <slot />
  </div>
{/key}
