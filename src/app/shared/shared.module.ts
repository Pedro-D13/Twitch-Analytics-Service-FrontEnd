import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HeadingComponent } from "src/app/heading/heading.component";
import { SearchTwitchComponent } from 'src/app/search/search-twitch/search-twitch.component';






const components = [ SearchTwitchComponent, HeadingComponent ]
const modules= [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatInputModule, MatCardModule, MatButtonModule]


@NgModule({
  declarations: [...components],
  exports:[...components],
  imports: [
    ...modules
  ]
})
export class SharedModule { }
