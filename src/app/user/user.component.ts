import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  viewusers: any;
  id: any;
  title: any;
  status: any;
  name: any;
  username: any;
  email: any;
  USERID: any;

  constructor(private service:UserService,private router:Router) { }

  ngOnInit(): void {
    this.userlist();
    this.suggestionlist();
  }

  displayuserlist:any;
  userlist()
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     this.service.userlisttUrl(headers).subscribe(Response =>{
     this.displayuserlist=Response; 
     
     console.log(this.displayuserlist)
    error => {
      alert("Connection Error");
    }
    });
  }

  //sort by Id
  idsort=false;
  sort()
  {
    console.log('sort');
    this.idsort = !this.idsort;
    if(this.idsort)
    {
      this.displayuserlist = _.orderBy(this.displayuserlist, ['id'], 'asc');    
    }
    else{
      this.displayuserlist = _.orderBy(this.displayuserlist, ['id'], 'desc');  
    }    
  }

  userdetails={
    name:"",
    username:"",
    email:""
  }
  edituserlist(userid)
  {
    this.USERID = userid;

    let headers = new Headers({ 'Content-Type': 'application/json' });  
    this.service.userdetails(headers,userid).subscribe(Response =>{
      
          this.userdetails.name = Response.name;
          this.userdetails.username = Response.username;
          this.userdetails.email = Response.email;
          console.log(this.userdetails);
         
      })
  }

  displayseggestion:any;
  suggestionlist()
  {
     let headers = new Headers({ 'Content-Type': 'application/json' });
     this.service.suggestionlistUrl(headers).subscribe(Response =>{
       console.log('suggestion')
       this.displayseggestion=Response; 
    error => {
      alert("Connection Error");
    }
    });
  }

}
