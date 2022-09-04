// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportErrorHandler from '../../../app/middleware/error_handler';
import ExportJwt from '../../../app/middleware/jwt';
import ExportResponseTime from '../../../app/middleware/response_time';

declare module 'egg' {
  interface IMiddleware {
    errorHandler: typeof ExportErrorHandler;
    jwt: typeof ExportJwt;
    responseTime: typeof ExportResponseTime;
  }
}
