import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifecycleHooks';
  src: string = 'https://i1.wp.com/blog.knoldus.com/wp-content/uploads/2019/03/lifecycleHook.jpg?w=810&ssl=1';
  isDiabled: boolean = false;
  name: string = '';
  destroy:boolean=true;
  inputvalue: string = "";

  fname:string='';
  
  onSubmit(inputEle: HTMLInputElement) {   //bcz we are passing local reference to the onSubmit
    console.log("inside click event function");
    this.inputvalue = inputEle.value;   //whatever value user enter in the text box willbe assign to input when button is clicked
  }
  
  destroyComponent(){
    this.destroy=false;
  }

  // inputAlert(event:any){
  //   console.log(event.data);  //this will only give one single value
  //   console.log(event.target.value);  //this will only give value from starting to the current value changed
  //   this.name=event.target.value;
  // }
}
