import { Router } from '@angular/router';
import { ApiServiceService } from './../api-service.service';
import { COre } from './../../models/ConteggioOre';
import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-dettaglio-ore',
  templateUrl: './dettaglio-ore.page.html',
  styleUrls: ['./dettaglio-ore.page.scss'],
})
export class DettaglioOrePage implements OnInit {

  Task: COre = history.state.task;
  date: string;

  constructor(private Api: ApiServiceService, private router: Router) { }

  ngOnInit() {
    this.date = moment(this.Task.DateWorkStart).toISOString(true);
  }

  taskCompleted(id: number, duration: number) {
    let task = new COre;
    task.isConfirmed = 'Y';
    task.id = id;
    task.Qty = duration;
    console.log(task);
    /* this.Api.isCOreComplete(task).subscribe((data)=>{
      console.log(data);
      this.router.navigateByUrl('/conteggio-ore');
    }); */
  }

  modifyTask( id: number, time: string, desc: string, duration: number) {
    let task = new COre;
    task.DateWorkStart = time.slice(0, 19).replace('T', ' ');
    task.Description = desc;
    task.Qty = duration;
    task.id = id;
    this.Api.putCOre(task).subscribe((data)=>{
      console.log(data);
    });
  }


}