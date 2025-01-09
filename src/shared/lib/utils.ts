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
  files?: T[]
): { imageCount: number; videoCount: number } {
  let imageCount = 0;
  let videoCount = 0;

  if (!files) return { imageCount, videoCount };

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

/**
 * Преобразует число или строку в строку с пробелами каждые 3 знака
 * @param {T} input - Число или строка для форматирования
 * @returns {string} Отформатированное значение
 */
export function formatNumberWithSpaces<T extends number | string>(
  input: T
): string {
  if (typeof input !== "number" && typeof input !== "string") {
    throw new TypeError("Input must be a number or a string");
  }

  // Преобразуем в строку, если это число
  const str = input.toString();

  // Регулярное выражение для добавления пробелов каждые 3 знака
  return str.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/**
 * Преобразует число или строку в строку с пробелами каждые 3 знака
 * @param {T} input - Число или строка для форматирования
 * @returns {string} Отформатированное значение
 */
export function formattedPhoneNumber<T extends number | string>(
  input: T
): string {
  if (typeof input !== "number" && typeof input !== "string") {
    throw new TypeError("Input must be a number or a string");
  }

  // Преобразуем в строку, если это число
  const str = input.toString().replace(/\D/g, "");

  if (str.length === 11 && str.startsWith("7")) {
    // Регулярное выражение для добавления пробелов каждые 3 знака
    return `+7 (${str.slice(1, 4)}) ${str.slice(4, 7)}-${str.slice(7, 9)}-${str.slice(9, 11)}`;
  }

  return str
}
