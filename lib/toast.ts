import { toast as sonnerToast } from "sonner";

interface ToastAction {
  label: string;
  onClick: () => void;
}

interface ToastOptions {
  description?: string;
  action?: ToastAction;
  duration?: number;
}

export const toast = {
  success: (message: string, options?: ToastOptions) => {
    sonnerToast.success(message, {
      description: options?.description,
      action: options?.action && {
        label: options.action.label,
        onClick: options.action.onClick,
      },
      duration: options?.duration || 3000,
    });
  },

  error: (message: string, options?: ToastOptions) => {
    sonnerToast.error(message, {
      description: options?.description,
      action: options?.action && {
        label: options.action.label,
        onClick: options.action.onClick,
      },
      duration: options?.duration || 5000,
    });
  },

  info: (message: string, options?: ToastOptions) => {
    sonnerToast.info(message, {
      description: options?.description,
      action: options?.action && {
        label: options.action.label,
        onClick: options.action.onClick,
      },
      duration: options?.duration || 3000,
    });
  },

  warning: (message: string, options?: ToastOptions) => {
    sonnerToast.warning(message, {
      description: options?.description,
      action: options?.action && {
        label: options.action.label,
        onClick: options.action.onClick,
      },
      duration: options?.duration || 4000,
    });
  },

  promise: async <T>(
    promise: Promise<T>,
    messages: {
      loading: string;
      success: string;
      error: string;
    },
    options?: {
      successOptions?: ToastOptions;
      errorOptions?: ToastOptions;
    },
  ) => {
    return sonnerToast.promise(promise, {
      loading: messages.loading,
      success: () => ({
        message: messages.success,
        description: options?.successOptions?.description,
        action: options?.successOptions?.action,
        duration: options?.successOptions?.duration || 3000,
      }),
      error: (error) => ({
        message: messages.error,
        description: options?.errorOptions?.description || error.message,
        action: options?.errorOptions?.action,
        duration: options?.errorOptions?.duration || 5000,
      }),
    });
  },
};
