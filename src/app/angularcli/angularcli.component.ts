import { Component, OnInit } from '@angular/core';
declare var particlesJS: any;

@Component({
  selector: 'app-angularcli',
  templateUrl: './angularcli.component.html',
  styleUrls: ['./angularcli.component.css']
})
export class AngularcliComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load('particles', 'assets/particles.json', () => {
      console.log('particles.js config loaded');
    })
  }
}