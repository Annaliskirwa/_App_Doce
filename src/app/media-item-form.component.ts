import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

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
      medium: new FormControl('Series'),
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')

      ])),
       
      category: new FormControl('Comedy'),
      // year: new FormControl('', this.yearValidator),
      year: new FormControl('')
    });
  }

  yearValidator(control: FormControl){
    if (control.value.trim().length === 0) {
      return null;
    }
    const year = parseInt(control.value, 10);
    const minYear = 1900;
    const maxYear = 2100;
    if (year >= minYear && year <= maxYear) {
      return null;
    } else {
      return { year: true };
    }
  }

  onSubmit(mediaItem:any){
    console.log(mediaItem);
  }
}
