import { Component, Input } from '@angular/core';
import { UserlistingService } from '../userlisting.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserList } from './userlist';
@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.scss']
})
export class UserlistingComponent {

  formdata: UserList = {
    id: '',
    name: '',
    password: '',
    email: '',
    gender: '',
    role: '',
    isActive: ''
  }
  constructor(private userlistService: UserlistingService, private router: Router, private route: ActivatedRoute) { }

  allusers: UserList[] = [];
  isShowAdd: boolean = false;
  isShowEdit: boolean = false;
  isShowDel: boolean = false;
  userDelId: string = "";
  userEditId: string = "";
  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.userlistService.getAll().subscribe((data) => {
      this.allusers = data;

    })
  }

  showDialogAdd() {

    this.isShowAdd = true;
    
  }
  showDialogEdit(id: string) {
    this.getById(id);
    this.isShowEdit = true;
  }
  getById(id: string) {
    this.userlistService.edit(id).subscribe((data) => {
      this.formdata = data;
    });

  }
  showDialogDel(id: string) {
    this.getById(id);
    this.userDelId = id;
    this.isShowDel = true;
  }
  closeModalDel() {
    this.isShowDel = false;
  }
  closeModalEdit() {
    this.isShowEdit = false;
  }
  closeModalAdd() {
    console.log("ekle dialog kapat");
    this.isShowAdd = false;
  }
  createUser() {
    this.formdata.isActive = "true";
    this.formdata.role = "kullanıcı";
    this.userlistService.create(this.formdata).subscribe({
      next: (data) => {
        console.log(data);
        this.getUsers();
        this.router.navigate(["/"])
        this.formdata=<UserList>{};
      },
      error: (er) => {
        console.log(er);
      }
    });
    
  }
  editUser() {
    console.log("jsdfjsd");
    this.userlistService.update(this.formdata).subscribe({
      next: (data) => {
        this.getUsers();
        this.router.navigate(["/"])
      },
      error: (er) => {
        console.log(er)
      }
    })
  }
  deleteUser(id:string){
    this.userlistService.delete(id).subscribe({
      next: (data) => {
        this.allusers = this.allusers.filter(x => x.id != id);
      },
    })
  }
}


