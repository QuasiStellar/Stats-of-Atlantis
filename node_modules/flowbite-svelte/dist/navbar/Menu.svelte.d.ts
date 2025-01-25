import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        size?: string | undefined;
        color?: string | undefined;
        variation?: "solid" | "outline" | undefined;
        ariaLabel?: string | undefined;
    };
    events: {
        click: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type MenuProps = typeof __propDef.props;
export type MenuEvents = typeof __propDef.events;
export type MenuSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte.com/)
 * ## Props
 * @prop export let size = '24';
 * @prop export let color = 'currentColor';
 * @prop export let variation: 'solid' | 'outline' = 'outline';
 * @prop export let ariaLabel = 'bars 3';
 */
export default class Menu extends SvelteComponent<MenuProps, MenuEvents, MenuSlots> {
}
export {};
//# sourceMappingURL=Menu.svelte.d.ts.map