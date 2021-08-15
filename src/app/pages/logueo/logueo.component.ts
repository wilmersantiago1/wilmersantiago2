import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {

  constructor( protected route: ActivatedRoute ) {
   }

   public paramId : string;

  ngOnInit(): void {
    this.paramId = this.route.snapshot.paramMap.get("id");
    console.log(this.paramId);
  }



}
