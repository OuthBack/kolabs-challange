import React, { useEffect } from 'react';

interface IProps {
  callback: () => any;
}

export const Sentinel = ({ callback }: IProps): JSX.Element => {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        callback();
      }
    });

    intersectionObserver.observe(document.querySelector('#sentinel')!);

    return () => intersectionObserver.disconnect();
  }, [callback]);

  return <div id="sentinel" data-testid="sentinel" />;
};
