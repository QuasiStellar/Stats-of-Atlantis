import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NavBrandProps = typeof __propDef.props;
export type NavBrandEvents = typeof __propDef.events;
export type NavBrandSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte.com/)
 * ## Props
 * @prop export let href: string = '';
 */
export default class NavBrand extends SvelteComponent<NavBrandProps, NavBrandEvents, NavBrandSlots> {
}
export {};
//# sourceMappingURL=NavBrand.svelte.d.ts.map