import { useCallback, useEffect, useRef } from 'react';

const useLockField = <T extends HTMLElement, F extends HTMLElement>() => {
  const fieldRef = useRef<T | null>(null);
  const rollbackRef = useRef<F | null>(null);

  const focusField = (e: FocusEvent) => {
    if (!fieldRef.current || !rollbackRef.current) return;

    const target = e.target as Node;

    if (!fieldRef.current.contains(target)) {
      rollbackRef.current.focus();
    }
  };

  const handleLockField = () => {
    window.addEventListener('focusin', focusField);
  };

  const handleUnlockField = useCallback(() => {
    window.removeEventListener('focusin', focusField);
  }, []);

  useEffect(() => {
    return () => {
      handleUnlockField();
    };
  }, []);

  return { fieldRef, rollbackRef, handleLockField, handleUnlockField };
};

export default useLockField;
