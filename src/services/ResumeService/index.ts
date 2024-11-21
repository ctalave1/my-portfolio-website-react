import axios, { AxiosResponse } from 'axios';

export const getResume = async (): Promise<void> => {
  try {
    const resp: AxiosResponse<Blob, Blob> = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/resume`, {
      responseType: 'blob',
    });

    const downloadUrl: string = window.URL.createObjectURL(resp.data);

    window.open(downloadUrl, '_blank');

    window.URL.revokeObjectURL(downloadUrl);
  } catch (e) {
    console.error(e);
  }
};