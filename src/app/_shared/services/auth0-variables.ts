interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
  apiUrl: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '5JiMTyk1BWjpO8o3Dnsz2Od2MdAyeGtV',
  domain: 'linalgo.eu.auth0.com',
  callbackURL: 'http://localhost:4200/dashboard',
  apiUrl: 'http://test-annotate.linalgo.com/api/'
};
