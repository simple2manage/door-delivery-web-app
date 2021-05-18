let host = window.location.host;
let hostName = host.split(":");
const baseUrl = `${window.location.protocol}//${hostName[0]}`;
export const GlobalVariable = Object.freeze({
  production: false,
  BASE_API_URL: `${baseUrl}/delivery/`,
  RESOURCE_URL: `${baseUrl}/assets/`,
  MIDDLEWARE_URL: `${baseUrl}:5001/api`,
});
