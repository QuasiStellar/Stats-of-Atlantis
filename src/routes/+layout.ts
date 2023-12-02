import type { PageLoad } from "../../.svelte-kit/types/src/routes/$types";

export const prerender = true

// @ts-ignore
export const load: PageLoad = ({ url }) => {
  return {
    url: url.pathname,
  }
}
