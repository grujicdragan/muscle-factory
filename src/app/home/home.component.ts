import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // toggle() {
  //   const flexNav = document.getElementsByClassName('flex-nav')[0];
  //   const icons = document.getElementsByClassName('icons-i')[0];
  //   const x = document.getElementsByClassName('toggle-button')[0];

  //   flexNav.classList.toggle('active');
  //   icons.classList.toggle('active');
  //   x.classList.toggle('active');
  // }

  toHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
  }

  toAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  }

  toPrices() {
    document.getElementById('prices').scrollIntoView({ behavior: 'smooth' });
  }

  toGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
  }

  toContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
  }
}
