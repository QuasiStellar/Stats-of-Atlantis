<script lang="ts">
	import '../app.postcss';
	import { fly } from 'svelte/transition';
	import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from 'flowbite-svelte';
	import { ChevronDownOutline } from 'flowbite-svelte-icons';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import { afterNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	import smallLogoImage from '$lib/images/small_logo.png';

	export let data;

	$: activeUrl = $page.url.pathname;
	$: otherGamesActive = activeUrl.startsWith('/onward') || activeUrl.startsWith('/rivals');

	let otherGamesOpen = false;
	let otherGamesEl: HTMLElement | undefined;
	let canHover = false;

	afterNavigate(() => {
		otherGamesOpen = false;
	});

	onMount(() => {
		if (!browser) {
			return;
		}

		const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
		const syncHover = () => {
			canHover = mq.matches;
			if (canHover) {
				otherGamesOpen = false;
			}
		};
		syncHover();
		mq.addEventListener('change', syncHover);

		const onDocPointer = (event: PointerEvent) => {
			if (!otherGamesOpen || !otherGamesEl) {
				return;
			}
			if (!otherGamesEl.contains(event.target as Node)) {
				otherGamesOpen = false;
			}
		};
		document.addEventListener('pointerdown', onDocPointer);

		return () => {
			mq.removeEventListener('change', syncHover);
			document.removeEventListener('pointerdown', onDocPointer);
		};
	});

	function onOtherGamesEnter() {
		if (canHover) {
			otherGamesOpen = true;
		}
	}

	function onOtherGamesLeave() {
		if (canHover) {
			otherGamesOpen = false;
		}
	}

	function onOtherGamesClick() {
		if (!canHover) {
			otherGamesOpen = !otherGamesOpen;
		}
	}
</script>

<Navbar class="fixed z-50 top-0 border-b bg-dark-800 border-b-dark-600">
	<NavBrand href="/">
		<img src={smallLogoImage} class="mr-3 h-6 sm:h-9" alt="SoA Logo" />
		<span class="whitespace-nowrap text-2xl font-semibold text-white">Stats of Atlantis</span>
	</NavBrand>
	<NavHamburger class="text-dark-400 hover:bg-dark-600" />
	<NavUl
		{activeUrl}
		classUl="border-dark-600 bg-dark-800"
		activeClass="hover:text-white hover:bg-dark-700 font-semibold"
		nonActiveClass="hover:text-white hover:bg-dark-700 font-semibold"
	>
		<NavLi class="text-dark-400" href="/">Catalogue</NavLi>
		<NavLi class="text-dark-400" href="/encyclopedia">Encyclopedia</NavLi>
		<NavLi class="text-dark-400" href="/builder">Card Builder</NavLi>
		<NavLi class="text-dark-400" href="/draft">Draft</NavLi>
		<NavLi class="text-dark-400" href="/timer">Timer</NavLi>
		<li
			bind:this={otherGamesEl}
			class="relative list-none"
			role="none"
			on:mouseenter={onOtherGamesEnter}
			on:mouseleave={onOtherGamesLeave}
		>
			<button
				type="button"
				class="flex w-full items-center gap-1 rounded py-2 pl-3 pr-4 text-dark-400 hover:text-white hover:bg-dark-700 font-semibold md:w-auto md:border-0 md:p-0 md:hover:bg-transparent {otherGamesActive
					? 'text-white'
					: ''}"
				aria-expanded={otherGamesOpen}
				aria-haspopup="true"
				on:click={onOtherGamesClick}
			>
				Other games
				<ChevronDownOutline
					class="h-3.5 w-3.5 transition-transform {otherGamesOpen ? 'rotate-180' : ''}"
				/>
			</button>
			{#if otherGamesOpen}
				<!-- Padding (not margin) keeps the gap inside the hover target -->
				<div class="z-50 w-full md:absolute md:left-0 md:top-full md:w-40 md:pt-2">
					<ul
						class="mt-1 w-full rounded-md border border-dark-600 bg-dark-800 py-1 shadow-lg md:mt-0"
						role="menu"
					>
						<li role="none">
							<a
								href="/onward"
								role="menuitem"
								class="block px-4 py-2 text-sm font-semibold text-dark-400 hover:bg-dark-700 hover:text-white {activeUrl.startsWith(
									'/onward',
								)
									? 'text-white bg-dark-700/60'
									: ''}"
								on:click={() => (otherGamesOpen = false)}
							>
								Onward
							</a>
						</li>
						<li role="none">
							<a
								href="/rivals"
								role="menuitem"
								class="block px-4 py-2 text-sm font-semibold text-dark-400 hover:bg-dark-700 hover:text-white {activeUrl.startsWith(
									'/rivals',
								)
									? 'text-white bg-dark-700/60'
									: ''}"
								on:click={() => (otherGamesOpen = false)}
							>
								Rivals
							</a>
						</li>
					</ul>
				</div>
			{/if}
		</li>
		<NavLi class="text-dark-400" href="/about">About</NavLi>
	</NavUl>
</Navbar>

{#key data.url}
	<div in:fly={{ x: -200, duration: 300, delay: 300 }} out:fly={{ x: 200, duration: 300 }}>
		<slot />
	</div>
{/key}
