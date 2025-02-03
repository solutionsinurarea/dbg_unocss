<script lang="ts">
import { Progress, Range, Table, Video } from "lib";
import type { TableItem } from "lib/model";

let src = $state("");
let volume = $state(0);
let currentTime = $state(0);
let duration = $state(0);
let activeTitle = $state("Not Playing");

const importItems = async (): Promise<TableItem[]> => {
	try {
		return (await import("assets/items.json")).default;
	} catch (error) {
		if (error instanceof Error) {
			throw error.message;
		}
		throw JSON.stringify(error);
	}
};

const onclick = (item: TableItem) => {
	src = item.src;
	activeTitle = item.label;
};
</script>

<main class="fixed inset-0 flex flex-col items-center justify-center">
  <div class="flex flex-col lg:max-w-9/12 h-11/12 overflow-none">
    <Video class="max-h-9/12" bind:currentTime bind:duration {src} bind:volume />

    <!-- progress styling issues addressed in component scope -->
    <Progress class="h-4" bind:currentTime {duration} />

    <!-- range styling issues addressed in component scope -->
    <Range class="w-full my-4" bind:volume />

    <!-- tab styling issues addressed in uno.config.ts -->
    <div role="tablist" class="tabs tabs-bordered">
      <h1 class="tab tab-active">{activeTitle}</h1>
    </div>

    <div class="h-3/12 overflow-y-auto">
      {#await importItems() then items}
        <!-- table styling issues addressed in uno.config.ts -->
        <Table class="table-pin-rows overflow-y-auto" {items} {onclick} />
      {:catch error}
        <p>Error: {error}</p>
      {/await}
    </div>
   </div>
</main>

