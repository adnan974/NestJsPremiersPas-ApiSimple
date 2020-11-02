import { Injectable } from "@nestjs/common";
import {Product} from "./product.model"
@Injectable()
export class ProductsService{
    product: Product[] = [];

    insertProduct(title:string,desc: string, price: number):string{
        const prodId = new Date().toString();
        const newProduct = new Product(prodId,title,desc,price)
        this.product.push(newProduct);
        return prodId;
    }
}