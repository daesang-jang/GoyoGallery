export function toPublicUrl(path: string): string {
  if (!path) return path;
  
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "daesang-jang.github.io"
  ) {
    if (path.startsWith("/") && !path.startsWith("/GoyoGallery")) {
      return `/GoyoGallery${path}`;
    }
  }
  
  return path;
}
