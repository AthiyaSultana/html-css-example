import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  rangeValue: String;
  dynamicValue: String = 'Login';
  constructor() {
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
  }

  ngOnInit() {
  }

}
