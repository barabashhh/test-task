import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GROUPS } from "../../constants/groups";
import { AddBookmarkFacadeService } from "./add-bookmark-facade.service";

@Component({
  selector: 'app-add-bookmark',
  templateUrl: './add-bookmark.component.html',
  styleUrls: ['./add-bookmark.component.scss']
})
export class AddBookmarkComponent {
  public form: FormGroup;
  public groups = GROUPS;

  constructor(fb: FormBuilder, private _facade: AddBookmarkFacadeService) {
    this.form = fb.group({
      name: [null, [Validators.required, Validators.min(3)]],
      url: [null, [Validators.required, Validators.min(5)]],
      group: [null, Validators.required]
    })
  }

  onSubmit() {
    const data = this.form.getRawValue();
    this._facade.saveBookmark(data)
  }

  get name() {
    return this.form.get('name');
  }

  get url() {
    return this.form.get('url');
  }

  get group() {
    return this.form.get('group');
  }
}
