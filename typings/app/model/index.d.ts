// This file is created by egg-ts-helper@1.33.0
// Do not modify this file!!!!!!!!!

import 'egg';
import ExportAccountTradeHistory from '../../../app/model/accountTradeHistory';
import ExportSettlePerp from '../../../app/model/settlePerp';
import ExportTrackingAccount from '../../../app/model/trackingAccount';

declare module 'egg' {
  interface IModel {
    AccountTradeHistory: ReturnType<typeof ExportAccountTradeHistory>;
    SettlePerp: ReturnType<typeof ExportSettlePerp>;
    TrackingAccount: ReturnType<typeof ExportTrackingAccount>;
  }
}
