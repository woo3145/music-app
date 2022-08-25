import { ChangeEvent, useState } from 'react';

const useForm = <T>(initialState: T) => {
  const [state, setState] = useState<T>(initialState);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setState({
      ...state,
      [name]: value,
    });
  };

  return { state, changeHandler };
};

export default useForm;
