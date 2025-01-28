import { create } from 'zustand';

type Toast = {
  id: string;
  type: 'success' | 'fail';
  message: string;
  isVisible: boolean;
};

type ToastState = { toasts: Toast[] };

type ToastActions = {
  addToast: (toast: Toast) => void;
  showToast: (id: string) => void;
  hideToast: (id: string) => void;
  removeToast: (id: string) => void;
};

const useToastStore = create<ToastState & ToastActions>()((set) => ({
  toasts: [],

  addToast: (toast: Toast) =>
    set((state) => ({ toasts: [...state.toasts, toast] })),

  showToast: (id: string) =>
    set((state) => ({
      toasts: state.toasts.map((toast) =>
        toast.id === id ? { ...toast, isVisible: true } : toast
      ),
    })),

  hideToast: (id: string) =>
    set((state) => ({
      toasts: state.toasts.map((toast) =>
        toast.id === id ? { ...toast, isVisible: false } : toast
      ),
    })),

  removeToast: (id: string) =>
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    })),
}));

export default useToastStore;
