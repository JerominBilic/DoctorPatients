import { Injectable } from '@angular/core';
import { Idoctor } from '../interfaces/Idoctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  doctors:Idoctor[]= [
    {name: 'JLo', specialization: 'General Medicine'},
    
    {name: 'Bob', specialization: 'Neurosurgeon'},
    
    {name: 'Vanilla Ice', specialization: 'Anesthesiologist'}
    
  ];

  constructor() { }
}
