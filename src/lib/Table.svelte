<script lang="ts">
import type { TableItem } from "lib/model";

const {
	class: styles,
	items,
	onclick,
}: {
	class?: string;
	items: TableItem[];
	onclick: (item: TableItem) => void;
} = $props();

const groups = $derived(
	Map.groupBy(items, (item) => item.label[0].toUpperCase()),
);
</script>

<table class="table {styles}">
  <thead>
    <tr>
      <th>Name</th>
    </tr>
  </thead>

  {#each groups as [format, rows]}
    <thead>
      <tr>
        <th>{format}</th>
      </tr>
    </thead>

    <tbody>
      {#each rows as row}
        <tr class="cursor-pointer hover:font-semibold" onclick={() => onclick(row)}>
          <td>
            {row.label}
          </td>
        </tr>
      {/each}
    </tbody>
  {/each}
</table>

