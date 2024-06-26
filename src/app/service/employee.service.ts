import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/api/v1/employees';

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  saveEmployee(employee: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, employee);
  }

  updateEmployee(id: number, employee: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
