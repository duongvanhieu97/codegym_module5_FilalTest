import {Injectable} from '@angular/core';
import {environment} from "../../environments/environments";
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable} from "rxjs";

const API_URL = `${environment.apiUrl}`

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + '/products');
  }

  findById(id: number) {
    return this.http.get<Product>(`${API_URL}/products/${id}`);
  }

  save(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + `/products`, product);
  }

  delete(id: number | undefined): Observable<Product> {
    return this.http.delete<Product>(`${API_URL}/products/${id}`);
  }

  editProduct(id: number, temp: Product) {
    return this.http.put<Product>(`${API_URL}/products/${id}`, temp);
  }
}
