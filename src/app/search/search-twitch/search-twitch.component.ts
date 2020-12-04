import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-twitch',
  templateUrl: './search-twitch.component.html',
  styleUrls: ['./search-twitch.component.scss']
})
export class SearchTwitchComponent implements OnInit {
  twitchAPIForm:FormGroup

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.twitchAPIForm = this.fb.group({
      username:['']
    })
  }

}
