import Server from "./Server";

export default class ServerList {
  servers: Server[];
  findServerAsync = () => {
    return new Promise<Server>(
      function (this: any, resolve: any) {
        // this?
        setInterval(_findServer(this.servers, resolve), 100);
      }.bind(this)
    );
  };
  constructor(list: Server[]) {
    this.servers = list;
  }
}

function _findServer(servers: Server[], resolve: any) {
  return () => {
    servers.forEach((server) => {
      if (server.isAvailable()) return resolve(server);
    });
  };
}
