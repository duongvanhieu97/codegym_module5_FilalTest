import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit{
  constructor(private productService : ProductService) {
  }

  ngOnInit(): void {
  }

  productForm : FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl()
  })


  saveProduct() {
    const product = this.productForm.value;
    this.productService.save(product).subscribe(()=>{
      alert("Thêm thành công")
    });
    this.productForm.reset();
  }
}
