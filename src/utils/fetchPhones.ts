const BASE_URL = process.env.REACT_APP_API_URL;
// const BASE_URL = 'https://fe-may23-syncwave-product-catalog.onrender.com';
// the link should be changed when the server is ready

function wait(delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}

function request<T>(url: string): Promise<T> {
  return wait(300)
    .then(() => fetch(BASE_URL + url))
    .then((response) => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
