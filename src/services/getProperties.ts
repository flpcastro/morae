import { Property } from "@/models/Property";
import { API } from "./api";

export async function getProperties() {
  const { data } = await API.get<Property[]>("/properties");
  return data;
}