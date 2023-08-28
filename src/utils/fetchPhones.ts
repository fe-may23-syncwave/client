const BASE_URL = 'http://localhost:3000/client/api/phones.json';
// the link should be changed when the server is ready

function wait(delay: number) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}

function request<T>(): Promise<T> {
  return wait(300)
    .then(() => fetch(BASE_URL))
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });
}

export const client = {
  get: <T>() => request<T>(),
};
