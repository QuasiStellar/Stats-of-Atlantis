<script lang="ts">
  import type { BiggerPictureInstance } from "bigger-picture"
  import { browser } from "$app/environment"

  export let bp: BiggerPictureInstance

  export function drawCard(canvas: HTMLCanvasElement) {
    (document.getElementById("canvas")!! as HTMLCanvasElement).getContext('2d')!!.drawImage(canvas, 0, 0, 2384, 3328)
  }

  function isPortrait() {
    if (!browser) return true
    return window.innerWidth * 1.4 < window.innerHeight
  }

  function getCardWidth() {
    if (isPortrait())
      return window.innerWidth
    else
      return window.innerHeight / 1.4
  }
</script>

<div class="p-5">
  <div class="border border-dark-600 rounded-[1.5rem] xs:rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]" style="max-width: {getCardWidth()}px">
    <canvas id="canvas" width="2384" height="3328" class="w-full rounded-[1.5rem] xs:rounded-[2rem] sm:rounded-[2.5rem] lg:rounded-[3rem]"/>
  </div>
</div>
