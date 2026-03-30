export function stripBOM(sourceText: string) {
  return sourceText.charCodeAt(0) === 0xfeff ? sourceText.slice(1) : sourceText;
}
