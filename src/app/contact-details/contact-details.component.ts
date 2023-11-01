import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent {
    firstName:string="unknown" //initalize to dummy values
    lastName:string="unknown"; //initalize to dummy values
    age:number=22;             //initalize to dummy values
    email:string='unknown';    //initalize to dummy values
    phonenumber:number =0;      //initalize to dummy values
    joinStatus:boolean=true;
    location:string='chennai';   //property binding
    color:string='violet';       //style binding
    size=1;
    styleclassname:string="bstyle";  
  constructor(){
    console.log("Component created/constructed ");
  }
  ngOnInit(){
    this.firstName="ravi";  //initalize to actual values
    this.lastName="kiran";  //initalize to actual values
    this.age=22;            //initalize to actual values
    this.email="ravikiran6@gmail.com";  //initalize to actual values

    console.log("contact details initialized ");
  }
  ngOnChanges(){
    console.log("contact details updated/changed ");
  }
  ngDoCheck(){
    console.log("Contact details verified");
  }
  ngOnDestroy(){
    console.log("Contact details destroyed after saving it ");
  }
}
