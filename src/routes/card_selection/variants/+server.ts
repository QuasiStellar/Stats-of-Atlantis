import { json } from "@sveltejs/kit";
import { readdir } from "node:fs/promises";
import path from "node:path";
import type { RequestHandler } from "./$types";

const ROOT = path.resolve("src/lib/images/final_cards");
const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp"]);

function isSafeSegment(value: string): boolean {
	return /^[a-zA-Z0-9_-]+$/.test(value);
}

export const GET: RequestHandler = async ({ url }) => {
	const hero = url.searchParams.get("hero") ?? "";
	const folder = url.searchParams.get("folder") ?? "";

	if (!isSafeSegment(hero) || !isSafeSegment(folder)) {
		return json({ files: [] });
	}

	const targetDir = path.resolve(ROOT, hero, folder);
	if (!targetDir.startsWith(ROOT)) {
		return json({ files: [] });
	}

	try {
		const entries = await readdir(targetDir, { withFileTypes: true });
		const files = entries
			.filter((entry) => entry.isFile())
			.map((entry) => entry.name)
			.filter((name) => IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase()))
			.sort((first, second) => first.localeCompare(second));
		return json({ files });
	} catch {
		return json({ files: [] });
	}
};
