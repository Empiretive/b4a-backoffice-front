import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/shared/services/resources/user.service';

@Component({
  selector: 'b4a-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css'],
})
export class DetailUserComponent implements OnInit {
  id: any;
  user: any;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.userService.getOneUser(this.id).subscribe((res: any) => {
      if (res.success) {
        this.user = res.data;
        console.log(this.user);
      }
    });
  }
}
