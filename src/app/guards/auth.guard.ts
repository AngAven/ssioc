import { CanActivateFn, CanMatchFn } from '@angular/router';
import {inject} from "@angular/core";
import {StoreService} from "../services/store.service";

export const authGuardAdmin: CanMatchFn = (route, state) => {
  const storeService = inject(StoreService)

  return storeService.isAdminUser();
};

export const authGuardUser: CanActivateFn = (route, state) => {
  const storeService = inject(StoreService)

  return storeService.isAuthenticated();
}
