import { NgModule, ViewChildren } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTagsComponent } from './create-tags/create-tags.component';
import { TagsComponent } from './tags.component';

const routes: Routes = [
  {
    path: '',
    component: TagsComponent,
    data: {
      role: 1,
    },
    children: [
      {
        path: 'CreateTagsComponent',
        component: CreateTagsComponent,
        data: {
          role: 1,
        },
      },
    ],
  },
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagsRoutingModule { }
