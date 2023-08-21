import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserList } from './userlisting/userlist';

@Injectable({
  providedIn: 'root'
})
export class UserlistingService {

  constructor(private httpClient: HttpClient) { }
  getAll(){
    return this.httpClient.get<UserList[]>('http://localhost:3000/user');
  }
  create(data: UserList){
    return this.httpClient.post('http://localhost:3000/user',data);
  }
  edit(id: string){
    return this.httpClient.get<UserList>(`http://localhost:3000/user/${id}`);
  }
  update(data:UserList){
    return this.httpClient.put<UserList>(`http://localhost:3000/user/${data.id}`,data);
  }
  delete(id: string) {
    return this.httpClient.delete<UserList>(`http://localhost:3000/user/${id}`);
  }
}
