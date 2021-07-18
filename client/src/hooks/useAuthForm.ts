import { useForm } from "react-hook-form";

export type FormData = {
  userId: string;
  password: string;
}

export const useAuthForm = () => {
  return useForm<FormData>({
    defaultValues: {
      userId: "",
      password: ""
    }
  });
}
