import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private tenants: string[] = ["loja1", "loja2"];

  constructor() {}

  getTenantForHostname(hostname: string): string {
    return this.getTenantForHost(hostname.split(".")[0]);
  }

  getTenantForString(s: string) {
    return this.tenants.filter(tenant => tenant === s.toLowerCase()).join('');
  }

  getTenantForHost(host: string): string {
    return this.getTenantForString(host);
  }

  getTenant(): string {
    return this.getTenantForHostname(location.hostname);
  }

  addTenantToHeaders(headers: HttpHeaders): HttpHeaders {
    return headers.append("X-Tenant-ID", this.getTenant());
  }

}
