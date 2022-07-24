import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {AppState} from './app.state';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  // @ts-ignore
  @Select(AppState.connectedUserName) connectedUserName$: Observable<string>;
  connectedUserName = 'hey';


  constructor() {
  }

  ngOnInit(): void {
    this.connectedUserName$.subscribe(name => {
      this.connectedUserName = name;
    });
  }

}
