import { create } from 'zustand';

interface AnimationState {
  isRootAnimation: boolean;

  setIsRootAnimation: (isAnimation: boolean) => void;
}

const useAnimation = create<AnimationState>((set) => ({
  isRootAnimation: false,

  setIsRootAnimation: (isRootAnimation) => set({ isRootAnimation }),
}));

export default useAnimation;
