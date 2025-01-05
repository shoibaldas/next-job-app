'use client';
import { usePathname } from "next/navigation";

const useBreadcrumbs = () => {
  const pathname = usePathname();

  const breadcrumbs = pathname
    .split("/")
    .filter(Boolean) // Removes empty parts
    .map((segment, index, arr) => {
      const href = `/${arr.slice(0, index + 1).join("/")}`;
      const label = segment.replace("-", " ").replace(/_/g, " ").toUpperCase();
      return { href, label };
    });

  return breadcrumbs;
};

export default useBreadcrumbs;
