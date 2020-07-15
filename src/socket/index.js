import { Server } from 'http'
import * as socket from 'socket.io'

export class Socket {
  /**
   * @type {socket.Server}
   */
  io = null;

  /**
   * @param {Server} http
   */
  constructor(http) {
    this.io = socket(http)
    this.connect()
  }

  connect() {
    this.io.on('connection', (client) => {
      /** @var client {socket.Socket} */
      console.info(` connected : ${client.id}`)
      this.handlers(client)
    })
  }

  /**
   * 
   * @param {socket.Socket} client 
   */
  handlers(client) {
    client.on('disconnect', () => {
      // tslint:disable-next-line: no-console
      console.info(`Socket disconnected : ${client.id}`)
    })
  }
}
