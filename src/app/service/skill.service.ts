import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private baseUrl = 'http://localhost:8080/api/v1/skills';

  constructor(private http: HttpClient) { }

  getAllSkills(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  getSkillById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }

  createSkill(skill: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, skill);
  }

  updateSkill(id: number, skill: any): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${id}`, skill);
  }

  deleteSkill(id: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${id}`);
  }
}
