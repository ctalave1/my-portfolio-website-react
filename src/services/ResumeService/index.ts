import axios, { AxiosResponse } from 'axios';

/**
 * Fetches and opens my resume file from the server in a new tab.
 * 
 * This function sends a GET request to myExpress API to retrieve a resume in the form of a Blob.
 * It then creates a download URL from the Blob data, opens the URL in a new browser tab, 
 * and revokes the object URL once it's no longer needed.
 * 
 * @async
 * @function
 * 
 * @returns {Promise<void>} A promise that resolves when the resume has been successfully fetched and opened in a new tab.
 * 
 * @throws {Error} Throws an error if the request fails or if there are issues with the Blob URL.
 * 
 * @example
 * // Fetch and open the resume in a new tab
 * await getResume() or getResume().then(resolve, reject){...};
 */
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
    throw e;
  }
};