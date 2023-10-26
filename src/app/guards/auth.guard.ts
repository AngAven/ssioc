import { CanActivateFn, CanMatchFn } from '@angular/router';
import {inject} from "@angular/core";
import {StoreService} from "../services/store.service";

export const authGuard: CanMatchFn = (route, state) => {
  const storeService = inject(StoreService)

  return storeService.isAdminUser();
};
