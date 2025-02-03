<script lang="ts">
import type { MouseEventHandler } from "svelte/elements";

let {
	class: styles,
	currentTime = $bindable(0),
	duration,
}: {
	class?: string;
	currentTime: number;
	duration: number;
} = $props();

const realDuration = $derived(Number.isFinite(duration) ? duration : 0);

const onclick: MouseEventHandler<HTMLProgressElement> = (e) => {
	const progress = e.currentTarget;
	const { left, width } = progress.getBoundingClientRect();
	currentTime = (duration * (e.clientX - left)) / width;
};
</script>

<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<progress 
  class="progress cursor-pointer {styles}" 
  value={currentTime} 
  max={realDuration}
  {onclick}
></progress>

<style>
  .progress::-webkit-progress-value {
    /* in uno context, this background color is not correctly applied */
    background-color: currentColor;
  }
</style>
