<script lang="ts">
  import CardGrid from "./CardGrid.svelte";
  import type { PageData } from './$types';
  import { page } from "$app/stores";
  import { heroes, oldHeroes } from "../../states"

  import { error } from "@sveltejs/kit"

  export let data: PageData;

  const hero = data.url.substring(1)
  $: useNewPrinting = $page.url.searchParams.get("printing") !== "old"

  $: if (useNewPrinting && !(hero in heroes)) {
    throw error(404)
  }

  $: if (!useNewPrinting && !(hero in oldHeroes)) {
    throw error(404)
  }

  $: heroName = useNewPrinting
    ? heroes[hero as keyof typeof heroes].name
    : oldHeroes[hero as keyof typeof oldHeroes].name
</script>

<svelte:head>
  <title>{heroName}</title>
  <meta name="description" content="Guards of Atlantis II card collection for {heroName}." />
</svelte:head>

<CardGrid heroName="{hero}" {useNewPrinting} />
