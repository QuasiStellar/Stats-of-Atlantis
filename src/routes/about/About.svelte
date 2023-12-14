<script>
  import { Img, P } from "flowbite-svelte";

  import discardImage from "$lib/images/discord.png";
  import logoImage from "$lib/images/logo.png";
</script>

<div class="flex items-center flex-col md:mt-20 mt-16">
  <div class="max-w-3xl flex items-center flex-col">
    <Img src={logoImage} />
    <P align="center" color="text-white" class="text-2xl md:text-4xl mb-4">
      Guards of Atlantis II card builder and catalogue made by
      <a href="https://quasistellar.xyz/" target="_blank" rel="noopener noreferrer" class="text-primary-500">QuasiStellar</a>
    </P>
    <P align="center" color="text-white" class="text-base md:text-2xl">
      <a href="https://gamefound.com/en/projects/wolffdesigna/guardsofatlantis2new" target="_blank" rel="noopener noreferrer" class="text-primary-500">Guards of Atlantis II</a>
      is a board game by
      <a href="https://wolffdesigna.com/" target="_blank" rel="noopener noreferrer" class="text-primary-500">Wolffdesigna®</a>
    </P>
    <a href="https://discord.gg/kYnkefHSEh" target="_blank" rel="noopener noreferrer">
      <div class="flex items-center flex-row my-8">
        <P weight="black" align="center" class="text-[#5865F2] text-base md:text-2xl">Join Discord</P>
        <div class="w-3"></div>
        <Img src={discardImage} size="w-20" />
        <div class="w-3"></div>
        <P color="text-white" align="center" class="text-base md:text-2xl">or be defeated.</P>
      </div>
    </a>
    <P align="center" color="text-white" class="text-base md:text-2xl">
      If something doesn't work properly or you have a suggestion, open an issue on
      <a href="https://github.com/QuasiStellar/Stats-of-Atlantis/issues" target="_blank" rel="noopener noreferrer" class="text-primary-500">Github</a>
    </P>
    <P size="xs" color="text-white" class="mt-14">
      Card design and artwork belong to Wolffdesigna®
    </P>
    <P size="xs" color="text-white">
      "Stats of Atlantis" is in no way affiliated with Wolffdesigna®
    </P>
  </div>
</div>
