<script lang="ts">
let {
	class: styles,
	volume = $bindable(0),
}: {
	class?: string;
	volume: number;
} = $props();
</script>

<label class="flex gap-2 items-center justify-center">
  <span class="label">Volume</span>
  <input type="range" class="range range-xs {styles}" bind:value={volume} min={0} max={1} step={0.05} />
</label>

<style>
.range::-webkit-slider-thumb,
.range::-moz-range-thumb {
  /* the range-xs class styles are not adjusting the sizes properly */
  height: 1rem;
  width: 1rem;

  /* in daisyui, position for the thumb is centered using top and translateY but this breaks in uno context */
  transform: none;
}
</style>
