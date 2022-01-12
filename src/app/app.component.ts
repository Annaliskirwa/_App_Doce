import { Component,OnInit, ViewEncapsulation } from '@angular/core';
import { MediaItemService, MediaItem} from './media-item.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'mw-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})


export class AppComponent implements OnInit {
  mediaItems:any;
  medium = '';

  constructor(private mediaItemService: MediaItemService){}
  ngOnInit() {
    this.getMediaItems(this.medium);
    // this.activatedRoute.paramMap
    //   .subscribe(paramMap => {
    //     let medium = paramMap.get('medium');
    //     if (medium?.toLowerCase() === 'all') {
    //       medium = '';
    //     }
    //     this.getMediaItems(this.medium);
    //   });
  }

  getMediaItems(medium: string) {
    this.medium = medium;
    this.mediaItemService.get(medium)
      .subscribe(mediaItems => {
        this.mediaItems = mediaItems;
      });
      console.log(this.mediaItems)
}
}
