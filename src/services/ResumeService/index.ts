import axios, { AxiosResponse } from 'axios';

const ROOT_API_URL = 'http://localhost:3000';

export const getResume = async (): Promise<void> => {
  try {
    const resp: AxiosResponse<Blob, Blob> = await axios.get(`${ROOT_API_URL}/resume`, {
      responseType: 'blob',
    });

    const downloadUrl: string = window.URL.createObjectURL(resp.data);

    console.log(typeof resp.data);

    window.open(downloadUrl, '_blank');

    window.URL.revokeObjectURL(downloadUrl);
  } catch (e) {
    console.error(e);
  }
};