import { useEffect } from "react";

export function useTitle(title) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) {
      document.title = title;
    }
    return () => {
      document.title = prevTitle;
    };
  });
}
