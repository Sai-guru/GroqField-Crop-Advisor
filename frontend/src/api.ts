import axios from 'axios'

export interface CropInput {
  N: number
  P: number
  K: number
  temperature: number
  humidity: number
  ph: number
  rainfall: number
  state: string
}

export interface CropOutput {
  predicted_crop: string
  ai_advice: string
}

export const recommendCrop = async (data: CropInput): Promise<CropOutput> => {
  const res = await axios.post('/recommend', data)
  return res.data
}