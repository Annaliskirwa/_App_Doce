import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  // form:FormGroup;
  form:any;
  
  ngOnInit(){
    this.form = new FormGroup({
      medium: new FormControl('Movies'),
      name: new FormControl(''),
      category: new FormControl(''),
      year: new FormControl('')
    });
  }
  onSubmit(mediaItem:any){
    console.log(mediaItem);
  }
}
