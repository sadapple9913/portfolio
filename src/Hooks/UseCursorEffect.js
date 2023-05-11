import { useCallback } from 'react';

export function useCursorEffect() {
  const handleMouseEnter = useCallback(() => {
    document.querySelector('.cursor').classList.add('cursor-effect');
    document.querySelector('.cursor_dot').classList.add('cursor-effect');
  }, []);

  const handleMouseLeave = useCallback(() => {
    document.querySelector('.cursor').classList.remove('cursor-effect');
    document.querySelector('.cursor_dot').classList.remove('cursor-effect');
  }, []);

  return { handleMouseEnter, handleMouseLeave };
}