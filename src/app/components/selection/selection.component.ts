import { Component, OnInit } from '@angular/core';

  @Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})

export class SelectionComponent implements OnInit {
  public show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /*showOffCanvas() {
    this.show = !this.show;
    if(this.show) {
      console.log("true"); alert('true');
    }
    else console.log("false"); alert('false');
  }*/
}

/*
@Directive({
  selector: '[appHamburgerToggle]'
})

export class HamburgerToggleDirective {
  @HostBinding('class.is-active')
  private isActive = false;

  //On click button
  @HostListener('click')
  toggleActive(): void {
    this.isActive = !this.isActive;
  }
}*/
