import React, { useEffect, useState } from 'react';

export const IsClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  useEffect(() => {
    setIsBrowser(true);
  }, []);

  if (!isBrowser) {
    return null;
  }

  return <>{children}</>;
};
