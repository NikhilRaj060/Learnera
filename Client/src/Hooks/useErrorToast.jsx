import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useErrorToast = (error) => {
  useEffect(() => {
    if (error) {
      toast.error('Something went wrong!', {
        position: 'bottom-center',
        autoClose: 5000,
      });
    }
  }, [error]);
};

export default useErrorToast;