import { Component, OnInit } from '@angular/core';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-list',
  templateUrl: './media-item-list.component.html',
  styleUrls: ['./media-item-list.component.css']
})
export class MediaItemListComponent implements OnInit {
  mediaItems:any;

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    this.mediaItemService.get()
    .subscribe(mediaItems => {
      this.mediaItems = mediaItems;
    });
    console.log(this.mediaItems)
  }

  onMediaItemDelete(mediaItem:any) {
    this.mediaItemService.delete(mediaItem);
  }
}