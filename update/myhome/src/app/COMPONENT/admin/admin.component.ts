import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeAdminModel } from 'src/app/admin.model';
import { AdminService } from 'src/service/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  formValue !: FormGroup;
  employeeData !: any;
  employeeObj : EmployeeAdminModel = new EmployeeAdminModel();
  showAdd !: boolean;
  showUpdate !: boolean;
  @Input() receive !: string;
  @Input() mobileSpecification !: any;
  role:string =""
  constructor(private api: AdminService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })
     this.getEmployeeDetails();
    // this.role = localStorage.getItem('userType')!
  }
  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postEmployeeDetails() {
    this.employeeObj.FirstName = this.formValue.value.firstName;
     this.employeeObj.LastName = this.formValue.value.lastName;
     this.employeeObj.Email = this.formValue.value.email;
     this.employeeObj.Mobile = this.formValue.value.mobile;
     
    this.api.PostEmployee(this.employeeObj)
      .subscribe(res => {
        console.log(res);
        let ref = document.getElementById('close');
      ref?.click();
      this.getEmployeeDetails();
      })
  }
  getEmployeeDetails() {
    this.api.GetEmployees()
    .subscribe(res=>{
      this.employeeData = res.employeeDetails;
      
    })
  }
  editEmployeeDetail(){
     this.employeeObj.FirstName = this.formValue.value.firstName;
     this.employeeObj.LastName = this.formValue.value.lastName;
     this.employeeObj.Email = this.formValue.value.email;
     this.employeeObj.Mobile = this.formValue.value.mobile;
    
    this.api.UpdateEmployee(this.employeeObj)
    .subscribe(res=>{
      alert("Updated Successfully")
      let ref = document.getElementById('close');
      ref?.click();
      this.getEmployeeDetails();
    })
  }
  onEdit(row : any){
    this.employeeObj.Id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);

    this.showUpdate = true;
    this.showAdd = false;
  }

  deleteEmployeeDetail(row : any){
   let clickedYes = confirm("Are you sure want to delete");
   if(clickedYes){
    this.api.DeleteEmployee(row.id)
    .subscribe(res=>{
      alert("Deleted Successfully");
      this.getEmployeeDetails();
    })
   }
    
  }
}
