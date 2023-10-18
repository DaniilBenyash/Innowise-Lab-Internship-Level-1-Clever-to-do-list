import { useState, createRef, useRef, useCallback, useEffect } from 'react';

export const useCalndar = () => {
  const [numberDays, setNumberDays] = useState(30);
  const lastDay = createRef();
  const observerLoader = useRef();

  const actionInSight = useCallback(
    (entries) => {
      if (entries[0].isIntersecting) {
        setNumberDays(numberDays + 30);
      }
    },
    [numberDays]
  );

  useEffect(() => {
    if (observerLoader.current) {
      observerLoader.current.disconnect();
    }

    observerLoader.current = new IntersectionObserver(actionInSight);
    if (lastDay.current) {
      observerLoader.current.observe(lastDay.current);
    }
  }, [actionInSight, lastDay]);

  return [numberDays, lastDay];
};
