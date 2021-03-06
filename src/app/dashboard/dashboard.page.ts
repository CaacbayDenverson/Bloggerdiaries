import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  constructor(public router:Router) { 

  }
  RedirectToOtherPage1()
  {
    this.router.navigateByUrl('/homepage');
  }
  RedirectToOtherPage2()
  {
    this.router.navigateByUrl('/profile');
  }
  RedirectToOtherPage3()
  {
    this.router.navigateByUrl('/aboutpage');
  }
  RedirectToOtherPage4()
  {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
  }

}
