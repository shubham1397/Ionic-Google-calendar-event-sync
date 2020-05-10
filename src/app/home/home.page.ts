import { Component } from '@angular/core';
import { Calendar } from '@ionic-native/calendar/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  eventTitle :any;
  eventLocation:any;
  eventDescription:any;
  eventStartDate:any;
  eventEndDate:any;

  constructor(private calendar: Calendar) {
    this.eventTitle = "This is Evenet Title";
    this.eventLocation = "This is Evenet Location";
    this.eventDescription = "This is Evenet Description";
    this.eventStartDate = new Date(2020, 4, 10, 23, 30);
    this.eventEndDate = new Date(2020, 4, 10, 23, 30);
  }


    createEvent()
    {
      this.calendar.createEvent(this.eventTitle, this.eventTitle, this.eventTitle, this.eventTitle, this.eventTitle)
      .then(result => {
        console.log(" create event success: ", result);
      })
      .catch(error => {
        console.log("create event error: ", error)
      })

    }


  }



