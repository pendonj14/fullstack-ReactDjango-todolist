import { useQuery } from "@tanstack/react-query";
import api from "@/api/api";

const fetchNotes = async () => {
  const response = await api.get("/api/notes/");
  return response.data;
};

export const useNotes = () => {
  return useQuery({
    queryKey: ["notes"],
    queryFn: fetchNotes,
  });
};
