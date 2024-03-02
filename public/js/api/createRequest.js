/**
 * Основная функция для совершения запросов
 * на сервер.
 * */
const createRequest = (options = {}) => {
  const xhr = new XMLHttpRequest;

  xhr.responseType = 'json'; // формат, в котором необходимо выдать результат
  xhr.onload = () => {
    if (xhr.response) {
      options.callback(xhr.response.error, xhr.response);
    }
  };

  let url = options.url, body = null;

  if (options.method === 'GET') {
    if (options.data && Object.keys(options.data).length) {
      url += '?' + Object.entries(options.data)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');
    }
  } else {
    body = new FormData;

    if (options.data) {
      Object.entries(options.data).forEach(([key, value]) => {
        body.append(key, value);
      });
    }
  }

  try {
    xhr.open(options.method, url);
    xhr.send(body);
  } catch (e) {
    options.callback(e);
  }
};
