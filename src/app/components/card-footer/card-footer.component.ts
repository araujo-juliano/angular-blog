import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-footer',
  templateUrl: './card-footer.component.html',
  styleUrls: ['./card-footer.component.css', './card-footer-responsive.component.css']
})
export class CardFooterComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = ""
  @Input()
  cardDescription:string = ""
  @Input()
  Id:string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
