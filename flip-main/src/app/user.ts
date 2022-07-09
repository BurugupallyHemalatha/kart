export class User {
  constructor(
    public name: string,
    public email: string,
    public phone: number,
    public topic: string,
    public street: any,
    public city: string,
    public state: string,
    public postalCode: number,
    public timePreference: string,
    public subscribe: boolean
  ) {}
}
