import { Component, OnInit } from '@angular/core';
import { Idoctor } from 'src/app/interfaces/Idoctor';
import { Ipatient } from 'src/app/interfaces/Ipatient';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {

  doctors:Idoctor[];

  patients:Ipatient[];

  constructor(private doctorService:DoctorService, private patientService:PatientService) { 
    this.doctors = doctorService.doctors;
    this.patients = patientService.patients;
  }

  ngOnInit(): void {
  }

  GetPatients(){
    return this.patients.length;
  }

  GetDoctors(){
    return this.doctors.length;
  }



}
