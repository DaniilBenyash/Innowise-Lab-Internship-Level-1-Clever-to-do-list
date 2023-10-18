import { useState, createRef, useRef, useCallback, useEffect } from 'react';

export const useCalendar = () => {
  const numbers = 30;
  const [numberDays, setNumberDays] = useState(numbers);
  const lastDay = createRef();
  const observerLoader = useRef();

  const actionInSight = useCallback(
    (entries) => {
      if (entries[0].isIntersecting) {
        setNumberDays(numberDays + numbers);
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
