/* eslint-disable */
import { useToast } from "vue-toastification";
import "../assets/styles/toasts.scss";

const toast = useToast();

export function error(message: string) {
  toast.error(message,
    {
      icon: {
        iconClass: "fa-solid fa-circle-xmark crossmark",
      },
    });
}

export function success(message: string) {
  toast.success(message,
    {
      icon: {
        iconClass: "fa-solid fa-circle-check checkmark",
      },
    });
}

export function info(message: string) {
  toast.info(message,
    {
      icon: {
        iconClass: "fa-solid fa-circle-info infomark",
      },
    });
}


export function warning(message: string) {
  toast.warning(message,
    {
      icon: {
        iconClass: "fa-solid fa-triangle-exclamation exclamation-mark",
      },
    });
}