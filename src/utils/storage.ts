const JWT_TOKEN : string = 'token';

export const storageToken = {
  get(): string | null {
    return localStorage.getItem(JWT_TOKEN);
  },
  set(token:string): void {
    return localStorage.setItem(JWT_TOKEN, token);
  },
  remove():void{
    return localStorage.clear();
  }
}