import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LocalNotifications } from 'ionic-native';


/*
  Generated class for the Notification page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notification',
  templateUrl: 'notification.html'
})
export class Notification {

  constructor(public navCtrl: NavController) {

  //  setInterval(this.x() , 3600);
  }

  ionViewDidLoad() {
    
  }
  
  
Timer(){
      // LocalNotifications.schedule({
      // id: 1,
      // text: 'Instant Notification',
      // title: 'Instant'
   
      // });
    
      //  LocalNotifications.schedule({
      //   id: 10,
      //   title: "5 Sec!!",
      //   text: "take a rest",
      //   at: new Date(new Date().getTime() + 5000),
      //    });

 this.Timer = () =>{
         LocalNotifications.schedule({
            id: 1,
            title: 'Warning',
            text: 'Youre so sexy!',
            data: {
              customProperty: 'custom value'
            }
          
          })
        };







       }

Timer1(){
      // LocalNotifications.schedule({
      // id: 1,
      // text: 'Instant Notification',
      // title: 'Instant'
   
      // });
       LocalNotifications.schedule({
        id: 10,
        title: "10 Sec!!",
        text: "Take a bath",
        at: new Date(new Date().getTime() + 10000),
         });
      }



}

  