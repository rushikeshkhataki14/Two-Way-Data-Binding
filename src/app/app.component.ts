import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  input:string = "";
  friends:String[] = [];

  add(){
    this.friends.push(this.input)
    this.input="";
  }

  remove(i:number){
    // this.friends.splice(i,1);
    if(confirm("are you sure to delete")){
     this.friends.splice(i,1);
    }
  }

}
