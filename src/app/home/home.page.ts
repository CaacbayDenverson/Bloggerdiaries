import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  username = '';
  password = new FormControl('');


  constructor(public router:Router, public toastController:ToastController) {

  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Login Successfully.',
      duration: 2000,
    });
    toast.present();
  }

  RedirectToOtherPage()
  {
    console.log(this.username);
    console.log(this.password.value)
    this.router.navigateByUrl('/dashboard');
  }
  RedirectToOtherPage1()
  {
    this.router.navigateByUrl('/signup');
  }


}
