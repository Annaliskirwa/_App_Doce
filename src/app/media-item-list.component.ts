import { Component, OnInit } from '@angular/core';
import { MediaItemService, MediaItem} from './media-item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems:any;
  medium = '';

  constructor(private mediaItemService: MediaItemService,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.getMediaItems(this.medium);
    this.activatedRoute.paramMap
      .subscribe(paramMap => {
        let medium = paramMap.get('medium');
        if (medium?.toLowerCase() === 'all') {
          medium = '';
        }
        this.getMediaItems(this.medium);
      });
  }

  onMediaItemDelete(mediaItem:any) {
    this.mediaItemService.delete(mediaItem);
    console.log("clicked remove")
    // this.mediaItemService.delete(mediaItem)
    //   .subscribe(() => {
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