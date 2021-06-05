import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ControlsService } from './controls.service';
@Injectable({
  providedIn: 'root',
})
export class ToggleContentService {
  private toggle$ = new Subject<boolean>();
  toggleDefault = true;
  constructor(private controlsService: ControlsService) {}

  changeToggle() {
    this.toggleDefault = !this.toggleDefault;
    this.toggle$.next(this.toggleDefault);
    this.controlsService.changeUserToggle(false);
  }

  getToggle(): Observable<boolean> {
    return this.toggle$;
  }
}
