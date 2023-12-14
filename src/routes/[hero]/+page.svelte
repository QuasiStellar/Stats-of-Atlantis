<script lang="ts">
  import CardGrid from "./CardGrid.svelte";
  import type { PageData } from './$types';
  import { heroes } from "../../states"

  import { error } from "@sveltejs/kit"

  export let data: PageData;

  if (!(data.url.substring(1) in heroes)) {
    throw error(404)
  }

  const hero = data.url.substring(1)
  const heroName = heroes[hero as keyof typeof heroes].name
</script>

<svelte:head>
  <title>{heroName}</title>
  <meta name="description" content="GoA II card collection for {heroName}." />
</svelte:head>

<CardGrid heroName="{hero}" />
