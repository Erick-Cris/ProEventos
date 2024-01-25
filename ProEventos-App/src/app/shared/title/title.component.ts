import { Component, Input, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit{
  @Input() title: string = "";

  constructor(private router: Router){}

  ngOnInit(): void {


  }

  public NaoELogin(): Boolean
  {
    if (this.router.url === '/user/login')
      return false
    else
      return true;
  }
}
