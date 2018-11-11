import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating-star',
  templateUrl: './rating-star.component.html',
  styleUrls: ['./rating-star.component.scss']
})
export class RatingStarComponent {

  @Input() rating = 0;
  constructor() { }

  public fiveStars: Array<number> = new Array<number>(5);

  public isMarked = (index) => {

      if (this.rating >= index + 1) {
        return 'fa-star-fill';
      } else if (this.rating > index && this.rating < index + 1) {
        return 'fa-star-half';
      } else {
        return 'fa-star-blank';
      }
  }
}




