import { Observable } from 'rxjs';
import {
  CanComponentDeactivate,
  CanDeactivateGuard
} from './can-deactivate-guard.service';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number; name: string; status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;

  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router,
    private canDeactivateGuard: CanDeactivateGuard
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.allowEdit = params['allowEdit'] === '1' ? true : false;
    });

    const serverId = +this.route.snapshot.params['id'];

    this.route.params.subscribe(params => {
      this.server = this.serversService.getServer(+params['id']);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });

    this.server = this.serversService.getServer(serverId);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (
      (this.serverName !== this.server.name ||
        this.serverStatus !== this.server.status) &&
      this.changesSaved === false
    ) {
      return confirm('Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
