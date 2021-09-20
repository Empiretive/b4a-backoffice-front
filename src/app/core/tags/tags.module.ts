import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagsRoutingModule } from './tags-routing.module';
import { TagsComponent } from './tags.component';
import { CreateTagsComponent } from './create-tags/create-tags.component';
import { ListTagsComponent } from './list-tags/list-tags/list-tags.component';


@NgModule({
  declarations: [
    TagsComponent,
    CreateTagsComponent,
    ListTagsComponent
  ],
  imports: [
    CommonModule,
    TagsRoutingModule
  ]
})
export class TagsModule { }
