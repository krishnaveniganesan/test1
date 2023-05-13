import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }
  apiUrl=' http://localhost:3000/posts';

  register(inputdata:any) {
     return this.http.post(this.apiUrl,inputdata)
  }
  getAll() {
    return this.http.get(this.apiUrl);
  }
  getById(id: number) {
    return this.http.get<any>(`http://localhost:3000/posts/${id}`);
   }
    
   update(payload:any){
    
    return this.http.put(`http://localhost:3000/posts/${payload.id}`,payload);
   }
   Delete (id:String):Observable<number>{
    let url1="http://localhost:3000/posts";
   
    return this.http.delete<number>(url1+"/"+id);
  }
}
