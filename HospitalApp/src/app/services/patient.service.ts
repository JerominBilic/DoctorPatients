import { Injectable } from '@angular/core';
import { Ipatient } from '../interfaces/Ipatient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  patients:Ipatient[] = [
    {name: 'John Wick', illness: 'Cancer'},
    {name: 'Ben Ten', illness: 'Flu'},
    {name: 'Bean', illness: 'Plague'},
    {name: 'Ken', illness: 'Covid-19'}
  ];

  constructor() { }

 
}
