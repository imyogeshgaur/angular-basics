import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  list=["Apple","Mango","Guvava","Litchi"];
  list2:any=[];
  myobj={};
  id="";
  title="";
  userId="";
  completed="";
  out="Yogesh Gaur";
  tempreature:string="";
  height:string="";
  curdol:string="";
  getVals(name:string,email:string,phone:string,message:string){
      this.myobj = {name,email,phone,message}
      this.list2.push(this.myobj);
  }
  showList(){
    console.log(this.list2);
  }
  async loadApi(id:any){
     try {
       const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
       const data = await response.json();
       this.userId = data.userId
       this.completed = data.completed
       this.title = data.title
     } catch (error) {
       console.log(error);
     } 
  }

  async sendData(id:string,userId:string,title:string,completed:string){
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`,{
      method:'POST',
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({id,userId,title,completed})
    })
    const data = await res.json();
    console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  async updateData(id:string,userId:string,title:string,completed:string){
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/1`,{
      method:'PUT',
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({id,userId,title,completed})
    })
    const data = await res.json();
    console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  async deleteData(id:string){
    try {
      this.id = id
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${this.id}`,{
      method:'PUT',
      headers:{
        'Content-Type':"application/json"
      },
    })
    const data = await res.json();
    console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}
