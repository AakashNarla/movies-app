import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { state, style, trigger, transition, animate } from '@angular/animations';

@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate('1s')])
    ])
  ]
})
export class SliderComponent implements OnInit {
  @Input() items: Movie[] = [];

  currentSlideIndex: number = 1;
  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex ==++this.currentSlideIndex % this.items.length;
    }, 5000)
  }
}
