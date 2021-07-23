import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  click()
  {
    let month=2;
    let year=2021;
    let numfddate=this.getnumofdate(year,month)
    let date=[];
    for(let i=1;i<=numfddate;i++)
    {
      let string=i+"-"+month+"-"+year
      date.push(string)
    }
    console.log(date)

  }

  getnumofdate(year,month)
  {
    return new Date(year, month,0).getDate();
  }

}
