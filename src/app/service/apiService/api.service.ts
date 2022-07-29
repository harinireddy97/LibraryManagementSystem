import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const httpOptions = {

  headers : new HttpHeaders({'Content-Type': 'application/json'}),

  observe: 'response' as 'response'

}

const headers = new Headers;

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  
 

  constructor(private httpclient:HttpClient ,private router:Router) { }
 
  get(url,headers){
    return this.httpclient.get(url,headers);
  }
 post(url,body,headers) {
  
  return this.httpclient.post(url,body,headers);
 }
 add(url,body){
  return this.httpclient.post(url,body)
 }
}
