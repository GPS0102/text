import "@testing-library/jest-dom/vitest";
import { afterEach, vi } from "vitest";

if (typeof window.alert !== "function") {
  Object.defineProperty(window, "alert", {
    configurable: true,
    value: () => undefined,
    writable: true,
  });
}

afterEach(() => {
  vi.restoreAllMocks();
});
