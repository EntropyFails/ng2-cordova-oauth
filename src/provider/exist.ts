import { OAuthProvider, IOAuthOptions } from "../provider";

export class Exist extends OAuthProvider {
    protected authUrl: string = 'https://exist.io/oauth2/authorize';
    protected APP_SCOPE_DELIMITER: string = '+';
    protected defaults: Object = {
      responseType: 'code'
    };
}
 