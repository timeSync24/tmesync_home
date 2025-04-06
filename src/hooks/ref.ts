import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRefereeForm } from "../services/ref";

export const useAddRefereeQuery = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRefereeForm,
    onSuccess: () => {
      close();
      alert("Referee Form saved successfully");
    },
    onError: () => {},
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["ref"] }).catch(() => {});
    },
  });
};
