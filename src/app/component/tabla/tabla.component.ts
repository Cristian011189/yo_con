import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { DataUserService } from 'src/app/services/data-user.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],
})
export class TablaComponent implements OnInit {
  users: any[] = [];
  constructor(private DataUserService: DataUserService) {}

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.DataUserService.getUser().subscribe((data) => {
      this.users = data;
      console.log(data);
    });
  }
}
