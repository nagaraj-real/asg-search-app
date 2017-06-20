import { Component, OnInit,Input } from '@angular/core';
import { Question} from "../../models";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() questions:Array<Question>;
  @Input() error:boolean;
  @Input() responselimit:number;

  constructor() {


  }

  ngOnInit() {
   
  };

}
