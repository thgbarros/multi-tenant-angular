import {Component, HostBinding, OnInit} from '@angular/core';
import {TenantService} from "./tenant/tenant.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.skins.less']
})
export class AppComponent implements OnInit{
  title = 'multi-tenant';

  constructor(private tenantService: TenantService) {
  }

  @HostBinding("class.theme-loja1") public loja1Theme: boolean = false;
  @HostBinding("class.theme-loja2") public loja2Theme: boolean = false;

  ngOnInit() {
    this.enableThemes();
  }

  get tenant() : string {
    return this.tenantService.getTenant();
  }

  enableThemes() {
    this.loja1Theme = this.tenantService.getTenant() === 'loja1';
    this.loja2Theme = this.tenantService.getTenant() === 'loja2';
  }

}
