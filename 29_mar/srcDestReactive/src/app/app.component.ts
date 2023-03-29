import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';

interface cities {
  name: string,
  disabled: boolean
}

interface route {
  from: string,
  to: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'srcDestReactive';

  srcCities: cities[] = [
    { name: "Delhi", disabled: false },
    { name: "Mumbai", disabled: false },
    { name: "Kolkata", disabled: false },
    { name: "Jaipur", disabled: false },
    { name: "Pune", disabled: false }
  ];


  destCities: cities[] = [
    { name: "Delhi", disabled: false },
    { name: "Mumbai", disabled: false },
    { name: "Kolkata", disabled: false },
    { name: "Jaipur", disabled: false },
    { name: "Pune", disabled: false }
  ];

  totalRoutes: Array<route> = [];

  reactiveForm!: FormGroup; //declaring variable for our reactiveForm

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      from: new FormControl(null),
      to: new FormControl(null)
    });
  }

  disableDest() {
    console.log(this.reactiveForm.get("from")?.value);
    //disabling same city in the destination dropdown
    for (let i = 0; i < this.destCities.length; i++) {
      if (this.destCities[i].name === this.reactiveForm.get("from")?.value) {
        this.destCities[i].disabled = true;
      }
    }

    //disabling all the destination pre defined
    for (let i = 0; i < this.totalRoutes.length; i++) {
      if(this.totalRoutes[i].from===this.reactiveForm.get("from")?.value){
          for (let j = 0; j < this.destCities.length; j++) {
              if(this.destCities[j].name===this.totalRoutes[i].to){
                this.destCities[j].disabled=true;
              }    
          }
      }
    }
  }

  disablesrc() {
    console.log(this.reactiveForm.get("to")?.value);
    //disabling same city in source dropdown
    for (let i = 0; i < this.srcCities.length; i++) {
      if (this.srcCities[i].name === this.reactiveForm.get("to")?.value) {
        this.srcCities[i].disabled = true;
      }
    }

      //disabling all the sources pre defined
      for (let i = 0; i < this.totalRoutes.length; i++) {
        if(this.totalRoutes[i].to===this.reactiveForm.get("to")?.value){
            for (let j = 0; j < this.srcCities.length; j++) {
                if(this.srcCities[j].name===this.totalRoutes[i].from){
                  this.srcCities[j].disabled=true;
                }    
            }
        }
      }
  }

  addRoute() {
    let obj: route = { from: "", to: "" }
    obj={from:this.reactiveForm.get("from")?.value,to:this.reactiveForm.get("to")?.value}
    console.log(obj);
    this.totalRoutes.push(obj);
    console.log(this.totalRoutes);  //pushing the from and to in array of object

    for (let i = 0; i < this.srcCities.length; i++) {              //enable all the options in both lists when printing is done
      this.srcCities[i].disabled = false;
      this.destCities[i].disabled = false;
    }

    this.reactiveForm.setValue({     //to reset the values in drop down 
      from:null,
      to:null
    })
  }
  
  clearRoute() {
    this.reactiveForm.reset();
    this.totalRoutes=[];
  }
}
