import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  toggle() {
    const navLinks = document.getElementsByClassName('nav-links')[0];
    const toggleBtn = document.getElementById('toggleBtn');

    navLinks.classList.toggle('active');
    toggleBtn.classList.toggle('active');
  }

  removeActive() {
    const navLinks = document.getElementsByClassName('nav-links')[0];
    const toggleBtn = document.getElementById('toggleBtn');

    navLinks.classList.remove('active');
    toggleBtn.classList.remove('active');
  }

  toHome() {
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    this.removeActive();
  }

  toAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    this.removeActive();
  }

  toPrices() {
    document.getElementById('prices').scrollIntoView({ behavior: 'smooth' });
    this.removeActive();
  }

  toGallery() {
    document.getElementById('gallery').scrollIntoView({ behavior: 'smooth' });
    this.removeActive();
  }

  toContact() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    this.removeActive();
  }
}
