import colors from "daisyui/src/theming/index.js";
import { defineConfig, presetWind, transformerDirectives } from "unocss";
import { presetDaisy } from "@ameinhardt/unocss-preset-daisy";
import extractorSvelte from "@unocss/extractor-svelte";

const { rules, ...preset } = presetWind();

export default defineConfig({
	extractors: [extractorSvelte()],
	presets: [
		presetDaisy({
			logs: false,
			themes: ["dim"],
		}),
		{
			...preset,
			rules: rules!.filter(([selector]) => {
				if (typeof selector !== "string") {
					const rxp = selector.toString();

					// this rule fixes issues with the daisyui tab component
					if (rxp.startsWith("/^tab")) {
						return false;
					}

					return true;
				}

				// this rule fixes issues with the daisyui table component
				return !selector.startsWith("table");
			}),
		},
	],
	theme: {
		colors,
	},
	transformers: [transformerDirectives()],
});
