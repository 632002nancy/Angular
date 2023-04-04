import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookGuardService } from '../Service/bookGuard.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  src1:any;
 
  constructor(private imageService:BookGuardService,private route:ActivatedRoute){
   
  }

  ngOnInit(): void {
    this.imageService.getImage().then((data)=>{
      this.src1=data
    })
    this.src1=this.route.snapshot.data['services'];  //it returns static and resolved data of this route
  }

}
