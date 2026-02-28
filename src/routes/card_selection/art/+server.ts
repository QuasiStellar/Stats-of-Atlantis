import { readFile } from "node:fs/promises";
import path from "node:path";
import type { RequestHandler } from "./$types";

const ROOT = path.resolve("src/lib/images/final_cards");

const MIME_BY_EXTENSION: Record<string, string> = {
	".png": "image/png",
	".jpg": "image/jpeg",
	".jpeg": "image/jpeg",
	".webp": "image/webp"
};

function isSafeSegment(value: string): boolean {
	return /^[a-zA-Z0-9_-]+$/.test(value);
}

function isSafeFileName(value: string): boolean {
	return /^[a-zA-Z0-9_.-]+$/.test(value);
}

export const GET: RequestHandler = async ({ url }) => {
	const hero = url.searchParams.get("hero") ?? "";
	const folder = url.searchParams.get("folder") ?? "";
	const fileName = url.searchParams.get("file") ?? "";

	if (!isSafeSegment(hero) || !isSafeSegment(folder) || !isSafeFileName(fileName)) {
		return new Response("Not found", { status: 404 });
	}

	const extension = path.extname(fileName).toLowerCase();
	const contentType = MIME_BY_EXTENSION[extension];
	if (!contentType) {
		return new Response("Not found", { status: 404 });
	}

	const targetPath = path.resolve(ROOT, hero, folder, fileName);
	if (!targetPath.startsWith(ROOT)) {
		return new Response("Not found", { status: 404 });
	}

	try {
		const fileBuffer = await readFile(targetPath);
		return new Response(fileBuffer, {
			headers: {
				"content-type": contentType,
				"cache-control": "public, max-age=3600"
			}
		});
	} catch {
		return new Response("Not found", { status: 404 });
	}
};
