import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  showHomePage = new BehaviorSubject(true);
  constructor() { }

}
