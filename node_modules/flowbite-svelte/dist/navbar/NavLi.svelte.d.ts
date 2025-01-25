import { SvelteComponent } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
        href?: string | undefined;
        activeClass?: string | undefined;
        nonActiveClass?: string | undefined;
    };
    events: {
        blur: FocusEvent;
        change: Event;
        click: MouseEvent;
        focus: FocusEvent;
        keydown: KeyboardEvent;
        keypress: KeyboardEvent;
        keyup: KeyboardEvent;
        mouseenter: MouseEvent;
        mouseleave: MouseEvent;
        mouseover: MouseEvent;
    } & {
        [evt: string]: CustomEvent<any>;
    };
    slots: {
        default: {};
    };
};
export type NavLiProps = typeof __propDef.props;
export type NavLiEvents = typeof __propDef.events;
export type NavLiSlots = typeof __propDef.slots;
/**
 * [Go to docs](https://flowbite-svelte.com/)
 * ## Props
 * @prop export let href: string = '';
 * @prop export let activeClass: string | undefined = undefined;
 * @prop export let nonActiveClass: string | undefined = undefined;
 */
export default class NavLi extends SvelteComponent<NavLiProps, NavLiEvents, NavLiSlots> {
}
export {};
//# sourceMappingURL=NavLi.svelte.d.ts.map