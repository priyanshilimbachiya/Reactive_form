import { NgModule } from '@angular/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

const MaterialComponents = [
  MatStepperModule,
  MatButtonModule,
  MatInputModule,
  MatIconModule,
  MatFormFieldModule
]
@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
