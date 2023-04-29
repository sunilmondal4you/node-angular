import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'node-angular';
  userList:any =[];
  public user:any = {};

  constructor( private appService: AppService) { }

  ngOnInit(): void {
    this.getUserList();
  }

  getUserList(){
    this.appService.getUserList().subscribe(res => {
      this.userList = res || [];
    });
  }

  addUser(){
    if(!this.user.userName || !this.user.emailId) return;

    this.appService.addUser(this.user).subscribe(res => {
      if(res && res.success){
        this.user = {};
        this.getUserList();
      }
    });

  }
}
