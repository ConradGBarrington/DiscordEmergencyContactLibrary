export default class EmergencyContactManager {
  constructor() {
    const sqlite3 = require('sqlite3').verbose();
    this.db = new sqlite3.Database(__dirname + '/data/db.sqlite');
  }
}