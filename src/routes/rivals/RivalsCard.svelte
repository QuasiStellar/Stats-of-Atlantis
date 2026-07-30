<script lang="ts">
	import type { RivalsCard } from "$lib/rivals"

	export let card: RivalsCard
	export let imageSrc: string
	export let selected = false
	export let showHighlight = true
	export let onSelect: (card: RivalsCard) => void

	let tiltEl: HTMLElement
	let coatingEl: HTMLElement
	let frameId = 0
	let pendingX = 0
	let pendingY = 0
	let hasPending = false

	const isHolo = card.class === "schema"
	const coatingOpacity = isHolo ? "0.55" : "0.45"

	function applyTilt(clientX: number, clientY: number) {
		const rect = tiltEl.getBoundingClientRect()
		const x = (clientX - rect.left) / rect.width
		const y = (clientY - rect.top) / rect.height
		const rotateY = (x - 0.5) * 28
		const rotateX = (0.5 - y) * 28

		tiltEl.style.setProperty("--rx", `${rotateX}deg`)
		tiltEl.style.setProperty("--ry", `${rotateY}deg`)
		tiltEl.style.setProperty("--shadow-y", "16px")
		tiltEl.style.setProperty("--shadow-blur", "26px")
		tiltEl.style.setProperty("--shadow-color", "rgba(59, 130, 246, 0.5)")
		coatingEl.style.setProperty("--gx", `${x * 100}%`)
		coatingEl.style.setProperty("--gy", `${y * 100}%`)
		coatingEl.style.setProperty("--foil-x", `${x * 100}%`)
		coatingEl.style.setProperty("--foil-y", `${y * 100}%`)
		coatingEl.style.opacity = coatingOpacity
	}

	function handleMove(event: MouseEvent) {
		pendingX = event.clientX
		pendingY = event.clientY
		hasPending = true
		if (frameId) {
			return
		}
		frameId = requestAnimationFrame(() => {
			frameId = 0
			if (!hasPending || !tiltEl || !coatingEl) {
				return
			}
			hasPending = false
			tiltEl.classList.add("is-tilting")
			applyTilt(pendingX, pendingY)
		})
	}

	function handleLeave() {
		hasPending = false
		if (frameId) {
			cancelAnimationFrame(frameId)
			frameId = 0
		}
		if (!tiltEl || !coatingEl) {
			return
		}
		tiltEl.classList.remove("is-tilting")
		tiltEl.style.setProperty("--rx", "0deg")
		tiltEl.style.setProperty("--ry", "0deg")
		tiltEl.style.setProperty("--shadow-y", "8px")
		tiltEl.style.setProperty("--shadow-blur", "16px")
		tiltEl.style.setProperty("--shadow-color", "rgba(0, 0, 0, 0.55)")
		coatingEl.style.setProperty("--gx", "50%")
		coatingEl.style.setProperty("--gy", "50%")
		coatingEl.style.setProperty("--foil-x", "50%")
		coatingEl.style.setProperty("--foil-y", "50%")
		coatingEl.style.opacity = "0"
	}
</script>

<button
	type="button"
	class="rivals-card-btn group relative w-full appearance-none border-0 bg-transparent p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-900"
	class:selected
	on:click={() => onSelect(card)}
	on:mousemove={handleMove}
	on:mouseleave={handleLeave}
	aria-pressed={selected}
	aria-label={card.name}
>
	<div class="relative w-full" style="perspective: 900px;">
		<div
			bind:this={tiltEl}
			class="rivals-card-tilt relative w-full will-change-transform"
			style="
				--rx: 0deg;
				--ry: 0deg;
				--shadow-y: 8px;
				--shadow-blur: 16px;
				--shadow-color: rgba(0, 0, 0, 0.55);
			"
		>
			<div class="rivals-card-frame relative w-full overflow-hidden">
				<img
					src={imageSrc}
					alt={card.name}
					class="block w-full h-auto select-none pointer-events-none"
					draggable="false"
					loading="lazy"
				/>
				<div
					bind:this={coatingEl}
					class="coating pointer-events-none absolute inset-0"
					class:holo={isHolo}
					style="--gx: 50%; --gy: 50%; --foil-x: 50%; --foil-y: 50%; opacity: 0;"
				></div>
				{#if selected && showHighlight}
					<div class="rivals-card-highlight pointer-events-none absolute inset-0"></div>
				{/if}
			</div>
		</div>
	</div>
</button>

<style>
	.rivals-card-tilt {
		transform: rotateX(var(--rx)) rotateY(var(--ry));
		filter: drop-shadow(0 var(--shadow-y) var(--shadow-blur) var(--shadow-color));
		transition:
			transform 150ms ease-out,
			filter 150ms ease-out;
	}

	.rivals-card-tilt.is-tilting {
		transition: none;
	}

	.rivals-card-frame {
		border-radius: 5.5% / 4%;
	}

	.rivals-card-highlight {
		border-radius: inherit;
		box-shadow: inset 0 0 0 2.5px #fbbf24;
	}

	.coating {
		border-radius: inherit;
		background:
			radial-gradient(
				circle at var(--gx) var(--gy),
				rgba(255, 255, 255, 0.75) 0%,
				rgba(255, 255, 255, 0.15) 28%,
				transparent 55%
			),
			linear-gradient(
				115deg,
				transparent 30%,
				rgba(255, 255, 255, 0.35) 48%,
				transparent 65%
			);
		mix-blend-mode: soft-light;
		transition: opacity 150ms ease-out;
	}

	.coating.holo {
		background:
			radial-gradient(
				farthest-corner circle at var(--gx) var(--gy),
				rgba(255, 255, 255, 0.7) 0%,
				rgba(255, 255, 255, 0.15) 28%,
				transparent 55%
			),
			repeating-linear-gradient(
				115deg,
				hsl(0, 85%, 65%) 0%,
				hsl(40, 90%, 65%) 8%,
				hsl(80, 85%, 60%) 16%,
				hsl(140, 80%, 55%) 24%,
				hsl(190, 85%, 60%) 32%,
				hsl(240, 85%, 65%) 40%,
				hsl(280, 85%, 65%) 48%,
				hsl(320, 85%, 65%) 56%,
				hsl(0, 85%, 65%) 64%
			);
		background-size:
			140% 140%,
			220% 220%;
		background-position:
			var(--gx) var(--gy),
			var(--foil-x) var(--foil-y);
		mix-blend-mode: color-dodge;
		filter: saturate(0.85) brightness(0.95);
	}

	.rivals-card-btn.selected img {
		filter: brightness(1.05);
	}
</style>
