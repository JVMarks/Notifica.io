import { api } from "../services/api";


export async function filterBy(floorId: number,
  locationName: string, priorityId: number, frequencyId: number, categoryId: number): Promise<void> {
  try {
    const data = await api.get(`/notifications/filter?floorId=${floorId}&locationName=${locationName}&priorityId=${priorityId}&frequencyId=${frequencyId}&categoryId=${categoryId}`);
    console.log("Filterby inicial -->", data.data)
    return data.data
  } catch (error) {
    console.log("Teste", error);
    throw error
  }
}