<script lang="ts">
import type { MouseEventHandler } from "svelte/elements";

let {
	class: styles,
	currentTime = $bindable(0),
	duration = $bindable(0),
	src,
	volume = $bindable(0),
}: {
	class?: string;
	currentTime: number;
	duration: number;
	src: string;
	volume: number;
} = $props();

const onclick: MouseEventHandler<HTMLVideoElement> = async (e) => {
	const vid = e.currentTarget;
	if (vid.paused) {
		await vid.play();
	} else {
		vid.pause();
	}
};
</script>

<!-- svelte-ignore a11y_media_has_caption -->
<video 
  autoplay 
  class="cursor-pointer {styles}"
  crossorigin="anonymous" 
  {src} 
  bind:currentTime 
  bind:duration
  bind:volume 
  {onclick}
></video>
