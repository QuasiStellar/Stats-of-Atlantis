<script lang="ts">
  import CardGrid from "./CardGrid.svelte";
  import type { PageData } from './$types';
  import { oldHeroes } from "../../states"

  import { error } from "@sveltejs/kit"

  export let data: PageData;

  if (!(data.url.substring(1) in oldHeroes)) {
    throw error(404)
  }

  const hero = data.url.substring(1)
  const heroName = oldHeroes[hero as keyof typeof oldHeroes].name
</script>

<svelte:head>
  <title>{heroName}</title>
  <meta name="description" content="Guards of Atlantis II card collection for {heroName}." />
</svelte:head>

<CardGrid heroName="{hero}" />
