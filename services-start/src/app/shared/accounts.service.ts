import {LoggingService} from './logging.service';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()

export class AccountsService {

  constructor(private loggingService: LoggingService) {  }

  statusUpdated = new EventEmitter<string>();

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(account: {name: string, status: string}) {
    this.accounts.push(account);
    this.loggingService.log('A server status changed, new status: ' + status);

  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.log('A server status changed, new status: ' + status);
  }

}
