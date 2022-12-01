import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
// @ts-ignore
  id: number;
  // @ts-ignore
  productForm: FormGroup;

  constructor(private productService: ProductService, private activateRoute: ActivatedRoute) {
    this.activateRoute.paramMap.subscribe((paraMap: ParamMap) => {
      // @ts-ignore
      this.id = +paraMap.get('id');
      this.getProduct(this.id);
    })
  }

  ngOnInit(): void {
  }

  getProduct(id: number) {
    return this.productService.findById(id).subscribe(product => {
      this.productForm = new FormGroup({
        id: new FormControl(product.id),
        title: new FormControl(product.title),
        price: new FormControl(product.price),
        description: new FormControl(product.description)
      })
    })
  }

  editProduct() {
    const editProduct = this.productForm.value
    this.productService.editProduct(editProduct.id, editProduct).subscribe(() => {
      alert("Cập nhập thành công");
    })
  }
}
