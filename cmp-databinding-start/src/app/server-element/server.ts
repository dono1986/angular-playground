export class Server {

  serverType: string;
  serverName: string;
  serverContent: string;

  constructor(type: string, name: string, content: string) {
    this.serverType = type;
    this.serverName = name;
    this.serverContent = content;
  }

}
