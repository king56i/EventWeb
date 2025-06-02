export default function truncateText(text: string, maxLength = 25): string {
  if (!text) return "";
  return text.length <= maxLength ? text : text.slice(0, maxLength) + "...";
}