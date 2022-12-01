import {Component, OnInit} from '@angular/core';
import {Product} from "../../model/product";
import {ProductService} from "../../service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit{
  products: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.productService.getAll().subscribe(productList => {
      this.products = productList;
    });
  }

  delete(id: any) {
    if (confirm('Bạn có muốn xóa?')) {
      this.productService.delete(id).subscribe(() => {
        alert("Ok");
        this.getAll()
      }, e => {
        console.error(e)
      });
    }
  }
}
