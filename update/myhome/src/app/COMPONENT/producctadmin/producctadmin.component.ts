import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductModel } from 'src/app/product.model';
import { ProductService } from 'src/service/product.service';

@Component({
  selector: 'app-producctadmin',
  templateUrl: './producctadmin.component.html',
  styleUrls: ['./producctadmin.component.css']
})
export class ProducctadminComponent implements OnInit {
  formValue !: FormGroup;
  productData !: any;
  productObj : ProductModel = new ProductModel();
  showAdd !: boolean;
  showUpdate !: boolean;
  @Input() receive !: string;
  @Input() mobileSpecification !: any;
  role:string =""
  constructor(private api: ProductService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      title: [''],
      price: [''],
      description: [''],
      category: [''],
      image: ['']
    })
     this.getproductDetails();
    // this.role = localStorage.getItem('userType')!
  }
  clickAddproduct(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postproductDetails() {
    this.productObj.title= this.formValue.value.title;
    this.productObj. price= this.formValue.value.price;
    this.productObj.description = this.formValue.value.description;
    this.productObj.category = this.formValue.value.category;
    this.productObj.image=this.formValue.value.image;
    
    this.api.Postproduct(this.productObj)
      .subscribe(res => {
        console.log(res);
        let ref = document.getElementById('close');
      ref?.click();
      this.getproductDetails();
      })
  }
  getproductDetails() {
    this.api.getproduct1()
    .subscribe(res=>{
      this.productData = res.productDetails;
      
    })
  }
  editproductDetail(){
    this.productObj.title= this.formValue.value.title;
    this.productObj. price= this.formValue.value.price;
    this.productObj.description = this.formValue.value.description;
    this.productObj.category = this.formValue.value.category;
    this.productObj.image=this.formValue.value.image;
    
    this.api.Updateproduct(this.productObj)
    .subscribe(res=>{
      alert("Updated Successfully")
      let ref = document.getElementById('close');
      ref?.click();
      this.getproductDetails();
    })
  }
  onEdit(row : any){
    this.productObj.Id = row.id;
    this.formValue.controls['title'].setValue(row.title);
    this.formValue.controls['price'].setValue(row.price);
    this.formValue.controls['description'].setValue(row.description);
    this.formValue.controls['category'].setValue(row.category);
    this.formValue.controls['image'].setValue(row.image);

    this.showUpdate = true;
    this.showAdd = false;
  }

  deleteproductDetail(row : any){
   let clickedYes = confirm("Are you sure want to delete");
   if(clickedYes){
    this.api.Deleteproduct(row.id)
    .subscribe(res=>{
      alert("Deleted Successfully");
      this.getproductDetails();
    })
   }
    
  }
}
