/**
 * Created by Mike on 20.10.16.
 */
import { Component } from '@angular/core';
import '../public/index.scss'

let temp = require('./app.component.html');

@Component({
  selector: 'my-app',
  template: temp,
  styles:[require('./app.component.css')]
})
export class AppComponent { }