import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../api";

const deleteNoteApi = async (id: number) => {
  const response = await api.delete(`/api/notes/delete/${id}/`);
  if (response.status !== 204) {
    throw new Error("Failed to delete note");
  }
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteNoteApi,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notes"] }); // Refetch notes after deletion
    },
  });
};
