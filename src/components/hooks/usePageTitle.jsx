'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const usePageTitle = (customTitle) => {
  const pathname = usePathname();

  useEffect(() => {
    const pageTitle = customTitle || pathname.slice(1).replace("-", " ").replace("/", " ") || "Default Page Title";
    document.title = pageTitle; // Set the document title
  }, [pathname, customTitle]);
};

export default usePageTitle;
