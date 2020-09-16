import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

import { Platform, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Calendar } from '@ionic-native/calendar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private calendar: Calendar,
    private menu: MenuController
  ) {
    this.initializeApp();
  }


  Direct(route: string){
    this.router.navigate(['/'+route]);
    this.menu.close();
  }

  openCalendar(){
    let ora = new Date;
    this.calendar.openCalendar(ora);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  LogOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('ADuser');
    this.router.navigate(['']);
    this.menu.close();
  }
}
