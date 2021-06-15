import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[role]',
})
export class RoleDirective implements OnInit {
  private user: any;
  private permission: number = 4;
  private userRole: number = 4;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
    this.userRole = this.user.role.level ? this.user.role.level : 4;
    this.updateView();
  }

  @Input()
  set role(val: number) {
    // this.viewContainerRef.createEmbeddedView(this.templateRef);
    this.permission = val;
    this.updateView();
  }

  private updateView() {
    this.viewContainerRef.clear();
    if (this.userRole <= this.permission) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
