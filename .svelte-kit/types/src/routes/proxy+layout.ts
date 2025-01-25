// @ts-nocheck
import type { PageLoad } from "../../.svelte-kit/types/src/routes/$types";

export const prerender = true

// @ts-ignore
export const load = ({ url }: Parameters<PageLoad>[0]) => {
  return {
    url: url.pathname,
  }
}
