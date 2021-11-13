import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  datauser:any;

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit() {
    this.getDataUser();
  }
  async getDataUser() {
    await this.api.getDataUser().subscribe(res=> {
      console.log(res);
      this.datauser = res.results;
      console.log(this.datauser);
    });
  }

  navigate_profile(){
    this.router.navigate(['/profile']);
  }

}
