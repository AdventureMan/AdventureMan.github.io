import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.scss']
})
export class UnderConstructionComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  ngOnInit() {
  }

  navigateTo(path: string) {
    if (path && path.length > 0) {
      console.log('navigating to ' + path)
      this._router.navigateByUrl('about');
    }
  }

}
