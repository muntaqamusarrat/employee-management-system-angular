import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Designation } from '../models/designation';

@Injectable({
  providedIn: 'root'
})
export class DesignationService {

  private baseUrl = 'http://localhost:8080/api/v1/designations';

  constructor(private http: HttpClient) { }

  getAllDesignations(): Observable<Designation[]> {
    return this.http.get<Designation[]>(this.baseUrl);
  }

  getDesignationById(id: number): Observable<Designation> {
    return this.http.get<Designation>(`${this.baseUrl}/${id}`);
  }

  createDesignation(designation: Designation): Observable<Designation> {
    return this.http.post<Designation>(this.baseUrl, designation);
  }

  updateDesignation(id: number, designation: Designation): Observable<Designation> {
    return this.http.put<Designation>(`${this.baseUrl}/${id}`, designation);
  }

  deleteDesignation(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
