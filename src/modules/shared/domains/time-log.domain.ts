import {TimeLogType} from "./time-log-type.domain";
import * as moment from 'moment';
import {Client} from "./client.domain";
import {Project} from "./project.domain";

export class TimeLog {

  id: any;
  type: TimeLogType;
  start: moment.Moment;
  stop: moment.Moment;
  client: Client;
  description: string;

  constructor(data) {

    this.id = data && data.id ? data.id : null;
    this.type = data && data.type ? new TimeLogType(data.type) : null;


    console.log(data.start);

    this.start = data && data.start ? moment(data.start) : moment();
    this.stop = data && data.stop ? moment(data.stop) : null;

    this.client = data && data.client ? new Client(data.client) : null;
    this.description = data && data.description ? data.description : '';

  }


}
