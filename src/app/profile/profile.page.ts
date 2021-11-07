import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileform = new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      username : new FormControl(''),
      email : new FormControl(''),
      password : new FormControl(''),
      confirmpassword : new FormControl(''),
      facebook : new FormControl(''),
      twitter : new FormControl(''),
      instagram : new FormControl(''),
      tiktok : new FormControl('')
      
    })


  constructor() { }
  
  updateform()
  {
    this.profileform.patchValue({
      firstname: 'Denverson',
      lastname: 'Caacbay',
      username: 'denver.kun',
      email: 'denversoncaacbay@gmail.com',
      password : '123',
      confirmpassword :'123',
      facebook : 'https://www.facebook.com/denver.kun.7',
      twitter : 'https://twitter.com/denver_kun9',
      instagram : 'https://www.instagram.com/denver.kun29/',
      tiktok : 'I CANT'
    });
  }
  ngOnInit() {
  }

}
