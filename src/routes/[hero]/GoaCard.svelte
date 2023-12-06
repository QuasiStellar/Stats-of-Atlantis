<script lang="ts">
  import type { BiggerPictureInstance } from "bigger-picture"

  export let bp: BiggerPictureInstance

  export function drawCard(canvas: HTMLCanvasElement) {
    (document.getElementById("canvas")!! as HTMLCanvasElement).getContext('2d')!!.drawImage(canvas, 0, 0, 2384, 3328)
  }
</script>

<div class="border border-dark-600 rounded-[3rem] w-156">
  <canvas id="canvas" width="2384" height="3328" class="w-full rounded-[3rem]"/>
</div>
