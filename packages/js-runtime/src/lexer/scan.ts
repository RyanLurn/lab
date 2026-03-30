import { stripBOM } from "@/utils/strip-bom";

export function scan(sourceText: string) {
  const characters = stripBOM(sourceText).split("");

  for (const character of characters) {
    console.write(character);
  }
}
