const defaultOptions = {
  timeout: 1000 * 60,
  retry: 3
};

const timeout = (time = defaultOptions.timeout) => new Promise((resolve, reject) => setTimeout(() => { reject('timeout') }, time));

const request = async (url, fetchOption, options = defaultOptions) => {
  let time = 0;
  const _request = Promise.race([
    fetch(url, fetchOption),
    timeout(options.timeout),
  ]);

  while(time < options.retry) {
    try {
      return await _request()
    } catch(e) {
      time++;
      continue;
    }
  }

  throw new Error('fetch failed');
}