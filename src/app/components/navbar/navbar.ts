import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  @ViewChild('iconOne') iconOne!: ElementRef <HTMLElement>;
  @ViewChild('iconTwo') iconTwo!: ElementRef <HTMLElement>;

  togleIcon(){
    this.iconOne.nativeElement.classList.toggle('d-none');
    this.iconTwo.nativeElement.classList.toggle('d-none');
  }

}
