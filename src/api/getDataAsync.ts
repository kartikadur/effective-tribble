const baseUrl = "https://jsonplaceholder.typicode.com";

export const getDataAsync = async (uri: string) => {
  window.performance.mark('request.start');
  let promise = await fetch(`${baseUrl}/${uri}`);
  let data = await promise.json();
  console.log('getData Async', data);
  window.performance.mark('request.stop');
  window.performance.measure('fetch.comments', 'request.start', 'request.stop');
  console.log(window.performance.getEntriesByName("fetch.comments"))
  return data
}