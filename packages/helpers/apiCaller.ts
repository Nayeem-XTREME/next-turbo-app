import { apiUrl } from '@app/configs/constants';

// Due to our current setup, supplying the request body through the Generics
// does not help us at all.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ObjectWithAnyProperty = Record<string, any>;

type ConfigArgs = {
  headers: {
    'Content-Type': string;
    Authorization?: string;
  };
};

const config: ConfigArgs = {
  headers: {
    'Content-Type': 'application/json',
  },
};

/**
 * An asynchronous function that fetches data from an endpoint with headers.
 *
 * @param {string} endpoint - The endpoint to fetch data from.
 * @param {string} method - The HTTP method to use for the request.
 * @param {ObjectWithAnyProperty} [body] - The body of the request in JSON format.
 * @param {string} [token] - An optional bearer token to attach to the request headers.
 * @param {RequestInit} [options] - Additional fetch options to include in the request.
 * @returns {Promise<T>} A promise that resolves with the response data in JSON format.
 */
const fetchWithHeaders = async <T>(
  endpoint: string,
  method: string,
  body?: ObjectWithAnyProperty,
  token?: string,
  options?: RequestInit
): Promise<T> => {
  const headers = {
    ...config.headers,
    ...(token && { Authorization: `Bearer ${token}` }),
  };

  const mergedOptions: RequestInit = {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  };

  console.log({ apiUrl, endpoint });

  const response = await fetch(`${apiUrl}/${endpoint}`, mergedOptions);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'An error occurred.');
  }

  return data;
};

/**
 * Executes an HTTP GET request to the specified endpoint with the optional
 * request options and returns the response data of type T.
 *
 * @param {string} endpoint - The URL to send the GET request to.
 * @param {RequestInit} [options] - (Optional) The request options to include.
 * @return {Promise<T>} The response data of type T.
 */
export const publicGet = async <T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'GET', undefined, undefined, options);
};

/**
 * Sends a POST request to a specified endpoint with the given body and optional fetch options.
 *
 * @param {string} endpoint - The URL to which the request is sent.
 * @param {ObjectWithAnyProperty} body - The data to be sent with the request.
 * @param {RequestInit} [options] - Optional settings such as headers or credentials for the fetch request.
 * @return {Promise<T>} A Promise that resolves with the response data in the specified type parameter T.
 */
export const publicPost = async <T>(
  endpoint: string,
  body: ObjectWithAnyProperty,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'POST', body, undefined, options);
};

/**
 * Returns a Promise that resolves to a value of type T. It performs a GET request to the given endpoint
 * with the provided token and options.
 *
 * @param {string} endpoint - The URL to which the request is made.
 * @param {string} token - The token used for authentication.
 * @param {RequestInit} [options] - Optional parameters for the request.
 * @return {Promise<T>} A Promise that resolves to a value of type T.
 */
export const privateGet = async <T>(
  endpoint: string,
  token: string,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'GET', undefined, token, options);
};

/**
 * Executes an HTTP POST request to the given endpoint with a JSON body and returns the parsed response.
 *
 * @param {string} endpoint - The endpoint URL to send the request to.
 * @param {string} token - The auth token to include in the request headers.
 * @param {ObjectWithAnyProperty} body - The JSON body to include in the request.
 * @param {RequestInit} [options] - Optional request options to include such as headers.
 * @return {Promise<T>} - A promise that resolves to the parsed response data.
 */
export const privatePost = async <T>(
  endpoint: string,
  token: string,
  body: ObjectWithAnyProperty,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'POST', body, token, options);
};

/**
 * Sends an HTTP PUT request to the specified endpoint with the given body and token.
 *
 * @param {string} endpoint - The URL to send the request to.
 * @param {string} token - The authentication token to use in the request headers.
 * @param {ObjectWithAnyProperty} body - The body of the request.
 * @param {RequestInit} [options] - Additional options for the request.
 * @return {Promise<T>} A promise that resolves to the response data of type T.
 */
export const privatePut = async <T>(
  endpoint: string,
  token: string,
  body: ObjectWithAnyProperty,
  options?: RequestInit
): Promise<T> => {
  return fetchWithHeaders<T>(endpoint, 'PUT', body, token, options);
};
