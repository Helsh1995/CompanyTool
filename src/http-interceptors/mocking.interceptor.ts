import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {TimeLog} from "../modules/shared/domains/time-log.domain";
import {TimeLogType} from "../modules/shared/domains/time-log-type.domain";
import {Client} from "../modules/shared/domains/client.domain";

@Injectable()
export class MockingHttpInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return Observable.of(null).mergeMap(() => {
      console.log('MOCKING', req);

      if (req.url.indexOf('/time-logs/all') != -1) {
        return Observable.of(new HttpResponse({status: 200, body: JSON.stringify(timeLogs)}));
      }

      return next.handle(req);
    });

  }

}

const typeDevelopment = new TimeLogType({
  id: 1,
  text: 'development'
});

const typeDesign = new TimeLogType({
  id: 2,
  text: 'design'
});

const clientA = new Client({
  id: 1,
  name: 'Cropdesign'
});

const clientB = new Client({
  id: 2,
  name: 'Blue Frontend'
});

const timeLogs: TimeLog[] = [
  new TimeLog({
    id: 1,
    type: typeDesign,
    start: '2018-04-30T06:00',
    stop: '2018-04-30T07:00',
    client: clientA,
    description: 'Bla bla bla'
  }),
  new TimeLog({
    id: 2,
    type: typeDesign,
    start: '2018-04-30T07:00',
    stop: '2018-04-30T08:30',
    client: clientA,
    description: 'Bla bla bla'
  }),
  new TimeLog({
    id: 3,
    type: typeDevelopment,
    start: '2018-04-30T10:00',
    stop: '2018-04-30T14:20',
    client: clientB,
    description: 'Bla bla bla'
  }),
  new TimeLog({
    id: 4,
    type: typeDevelopment,
    start: '2018-04-30T14:20',
    client: clientB,
    description: 'Bla bla bla'
  }),
];
