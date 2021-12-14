import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

const { Storage } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  datauser:any;
  constructor(private router:Router, public api:ApiService) {}

  async removeItem(item) {
    await Storage.remove({ key: item });
  }

  ngOnInit() {
	  this.getDataUser();
  }
  
  async getDataUser() {
    await this.api.getDataUser()
      .subscribe(res => {
        console.log(res);
        this.datauser = res.data;
		console.log(this.datauser);
      }, err => {
        console.log(err);
      });
  }

  logout()
  {

    this.removeItem('user_ionichttpAuth');
    this.router.navigateByUrl('/login');

  }

  

}
