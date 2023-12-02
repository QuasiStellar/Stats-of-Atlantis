<script>
  import { Card, Img } from "flowbite-svelte";

  import errorImage from "$lib/images/error.png"
</script>

<div class="flex items-center justify-center flex-col min-h-screen">
  <div class="md:h-20 h-16"></div>
  <Card href="/" padding="none" class="border-dark-600 bg-transparent hover:bg-transparent rounded-3xl">
    <Img src={errorImage} class="max-w-sm md:max-w-md rounded-3xl" />
  </Card>
</div>
