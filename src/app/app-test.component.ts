import { Component } from '@angular/core';
import { MdToolbar } from '@angular2-material/toolbar';
import { MD_SIDENAV_DIRECTIVES } from '@angular2-material/sidenav';
import { OnInit } from '@angular/core';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import { NgStyle } from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'app-test-app',
  templateUrl: 'app-test.component.html',
  styleUrls: ['app-test.component.css'],
    directives: [
    MdToolbar,
    MD_SIDENAV_DIRECTIVES,
    MdIcon,
    MD_BUTTON_DIRECTIVES,
    NgStyle
  ],
  providers: [MdIconRegistry]
})
export class AppTestAppComponent implements OnInit {
  title = 'app-test works!';
 
  ngOnInit() {
  }
  setStyles(){
    let topValue = 0;
    let windowHeight = window.outerHeight;
    
    topValue = Math.ceil(windowHeight*0.86);
    
    let styles = {
      // CSS property names
      'top':  topValue + 'px',  // set top value
      'right': '6%'  // set right value
    }
    return styles;
  }
  menuButonActions(){
  }
}
