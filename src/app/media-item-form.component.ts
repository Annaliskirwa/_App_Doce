import { Component, OnInit, Inject} from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder} from '@angular/forms';
import { MediaItemService } from './media-item.service';

@Component({
  selector: 'mw-media-item-form',
  templateUrl: './media-item-form.component.html',
  styleUrls: ['./media-item-form.component.css']
})
export class MediaItemFormComponent implements OnInit {
  // form:FormGroup;
  form:any;
  formBuilder: any;

  constructor(formBuilder: FormBuilder, 
    private mediaItemService: MediaItemService,
    @Inject('lookupListToken') public lookupLists: any){}
  
  ngOnInit(){
    this.form = this.formBuilder.group({
      medium: this.formBuilder.control('Series'),
      name: this.formBuilder.control('', Validators.compose([
        Validators.required,
        Validators.pattern('[\\w\\-\\s\\/]+')

      ])),
       
      category: this.formBuilder.control('Comedy'),
      // year: new FormControl('', this.yearValidator),
      year: this.formBuilder.control('')
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
      return { year: {
        min: minYear,
        max: maxYear
      } };
    }
  }

  onSubmit(mediaItem:any){
    console.log(mediaItem);
    this.mediaItemService.add(mediaItem);
  }
}
