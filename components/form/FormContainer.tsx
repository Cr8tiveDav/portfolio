'use client';
import { ActionFunction } from '@/utils/types';
import React, { useActionState, useEffect } from 'react';
import { toast } from 'sonner';

const initialState = {
  message: '',
};

const FormContainer = ({
  action,
  children,
}: {
  action: ActionFunction;
  children: React.ReactNode;
}) => {
  const [state, formAction] = useActionState(action, initialState);

  useEffect(() => {
    if (state?.message) {
      toast(state.message);
    }
  }, [state]);
  return <form action={formAction}>{children}</form>;
};

export default FormContainer;
