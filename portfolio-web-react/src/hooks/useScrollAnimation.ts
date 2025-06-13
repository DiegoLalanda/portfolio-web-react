
import { useEffect, useRef, useState, type Ref } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  rootMargin?: string;
}

export const useScrollAnimation = <T extends HTMLElement>(
  options?: ScrollAnimationOptions
  // CAMBIO CLAVE: Usa React.Ref<T> como el tipo de la ref devuelta
): { ref: Ref<T>; isVisible: boolean } => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.1, triggerOnce = true, rootMargin = '0px' } = options || {};

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(currentRef);
          }
        } else {
          if (!triggerOnce) {
            setIsVisible(false);
          }
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold, triggerOnce, rootMargin]); // ref is stable

  return { ref, isVisible };
};
