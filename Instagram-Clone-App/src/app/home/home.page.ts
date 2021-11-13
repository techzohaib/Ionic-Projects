import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datauser:any;
  constructor(public api: ApiService, private router: Router) {}

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

  messages() {
    console.log("Click on message icon :)");
  }
  home() {
    console.log("Clicked on Home...!!!")
  }
  add() {
    console.log("Clicked on Add...!!!")
  }
  search() {
    console.log("Clicked on Search...!!!")
  }
  heart() {
    console.log("Clicked on Heart...!!!")
  }
  profile() {
    console.log("Clicked on Profile...!!!")
  }
  navigate_profile(){
    this.router.navigate(['/profile']);
  }

}
