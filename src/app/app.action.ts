export class UserConnect {
  static readonly type = '[AppState] User connect';
  constructor(public connectedUserName: string) {}
}
