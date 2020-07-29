import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: Http) { }

  public userlisttUrl(headers)
  {
    const url = 'http://jsonplaceholder.typicode.com/users';
    const response = this.http.get(url, headers).map(res => res.json());
    return response;
  }

  public userdetails(headers,id)
  {
    const url = 'https://jsonplaceholder.typicode.com/users/' + id;
    const response = this.http.get(url, headers).map(res => res.json());
    return response;
  }

  public suggestionlistUrl(headers)
  {
    const url = 'https://jsonplaceholder.typicode.com/todos';
    const response = this.http.get(url, headers).map(res => res.json());
    return response;
  }
}
