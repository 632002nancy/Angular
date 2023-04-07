import { Component } from '@angular/core';
import { UsersDataService } from './Services/users-data.service';

export interface student {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'integrateApiAngular';
  //we can't connect angular directly to database so we use api to get the data

  getJsonValue: any;
  displayData:boolean=false
  allProducts:student[]=[];
  
  constructor(private userData: UsersDataService) {
    userData.getUsers().subscribe((data)=>{  ///subscribe tells that the data from the api will be used in this Appcomponent not in other components
      this.getJsonValue=data;
      this.allProducts=this.getJsonValue;
      console.log(this.getJsonValue.users);
      console.log(this.allProducts);
    });  
   }
   getData(){
    this.displayData=true;
   }

  postData(data:string):void{
    this.userData.postUsers(data).subscribe((result)=>{   //returns an observable so need to subscrie
      console.log(result);
    })
  }
  updateData(data:string):void{
    console.log(data)
    this.allProducts.find((s)=>{
      console.log(s)
    })
  }
  deleteData(data:string):void{
    console.log(data);
    this.userData.deleteUsers(data).subscribe((result)=>{
      console.log(result)
    })
  }
}