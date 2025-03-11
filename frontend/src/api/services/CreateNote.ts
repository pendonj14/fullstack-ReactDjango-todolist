import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";

const createNoteApi = async (content: string) => {
  const response = await api.post("/api/notes/", { content });
  if (response.status !== 201) {
    throw new Error("Failed to create note.");
  }
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createNoteApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] }); // Refetch notes after creation
    },
  });
};
