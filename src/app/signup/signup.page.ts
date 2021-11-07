import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  profileform = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    username : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl(''),
    confirmpassword : new FormControl(''),
  })
  

  constructor(
    public toastController:ToastController,
    public router:Router
    
    ) 
  {

  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Register Successfully.',
      duration: 2000,
    });
    toast.present();
  }

  RedirectToOtherPage()
  {
    console.log(this.profileform.value);

    this.router.navigateByUrl('/home');
  }
  updateform()
  {
    this.profileform.patchValue({
      firstname: 'Denverson',
      lastname: 'Caacbay',
      username: 'denver.kun',
      email: 'denversoncaacbay@gmail.com',
      password : '123',
      confirmpassword :'123'
    });
  }

  ngOnInit() {
  }

}
