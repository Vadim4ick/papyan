import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function pathImage(img: string) {
  return `${process.env.NEXT_PUBLIC_SERVER_URL}/assets/${img}`;
}

type FileType = {
  directus_files_id: {
    id: string;
    title: string;
    width: number | null;
    type: string;
    height: number | null;
  };
};

export function countFileTypes<T extends FileType>(
  files: T[]
): { imageCount: number; videoCount: number } {
  let imageCount = 0;
  let videoCount = 0;

  for (const file of files) {
    const type = file.directus_files_id.type;
    if (type.startsWith("image")) {
      imageCount++;
    } else if (type.startsWith("video")) {
      videoCount++;
    }
  }

  return { imageCount, videoCount };
}
