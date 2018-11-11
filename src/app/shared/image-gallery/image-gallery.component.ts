import { Component,Input , OnInit } from '@angular/core';
import {NgxGalleryAnimation, NgxGalleryImage, NgxGalleryImageSize, NgxGalleryOptions} from "ngx-gallery";

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  public galleryOptions: NgxGalleryOptions[];
  public galleryImages: NgxGalleryImage[];
  
  @Input() imagePaths: Array<string>;

  constructor() {
   }

  ngOnInit() {
    this.galleryOptions = [
      {
          width: '100%',
          height: '700px',
          imagePercent: 90,
          thumbnailsColumns: 3,
          thumbnailsPercent: 15,
          thumbnailsMargin: 10,
          thumbnailsArrows: true,
          thumbnailsSwipe : true,
          thumbnailSize: NgxGalleryImageSize.Contain,
          imageAnimation: NgxGalleryAnimation.Slide,
          preview:true,
          previewZoom: true,
          previewFullscreen:false,
          previewForceFullscreen: false,
          arrowPrevIcon: 'fa fa-angle-left',
          arrowNextIcon: 'fa fa-angle-right'
      },
      {
          breakpoint: 800,
          width: '100%',
          height: '600px'
      },
      {
          breakpoint: 400,
          preview: false
      }
  ];
  
    this.galleryImages = this.imagePaths.map(imgUrl => {
        return {
            small: imgUrl,
            medium: imgUrl,
            big: imgUrl
        };
    });
  }

}
