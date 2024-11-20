import { HttpInterceptorFn } from '@angular/common/http';
import { LoaderService } from './loader.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  let totalRequests = 0;
  const service = inject(LoaderService);
  totalRequests++;
  service.setLoading(true);
  return next(req).pipe(
    finalize(() => {
      totalRequests--;
      if (totalRequests == 0) {
        service.setLoading(false);
      }
    })
  );
}