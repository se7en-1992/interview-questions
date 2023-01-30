const defaultOptions = {
    timeout: 5000,
    retry: 3,
  };
  
  const timeout = (timeout = defaultOptions.timeout) => new Promise((_, reject) => setTimeout(() => reject(new Error('timeout')), timeout)); 
  
  const request = async (url, fetchOption, options = defaultOptions) => {
    let times = 0;
    const _request = () => Promise.race([
      fetch(url, fetchOption),
      timeout(options.timeout),
    ]);
    while (times < (options.retry || defaultOptions.retry)) {
      try {
        return await _request();
      } catch(err) {
        ++times;
        continue;
      }
    }
    throw new Error('fetch failed');
  }