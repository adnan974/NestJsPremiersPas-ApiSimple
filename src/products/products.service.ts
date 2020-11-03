import { Injectable, NotFoundException } from "@nestjs/common";
import {Product} from "./product.model"
@Injectable()
export class ProductsService{
    products: Product[] = [];

    insertProduct(title:string,desc: string, price: number):string{
        const prodId = Math.random().toString();
        const newProduct = new Product(prodId,title,desc,price)
        this.products.push(newProduct);
        return prodId;
    }

    getAllProducts(){
        return [...this.products];
    }

    private findProduct(productId:String):[Product,number]{
        const productIndex = this.products.findIndex((e)=>e.id === productId);
        const productValue = this.products[productIndex];
        if(!productValue){
            throw new NotFoundException("erreur produit non trouvé"); 
        }else{
            return [productValue,productIndex];
        }
    }

    getSingleProduct(productId:string){
        const productValue = this.findProduct(productId)[0];
        return {...productValue};
    }

    updateSingleProduct(productId:string,productTitle,productDescription,productPrice){
        const [product,index] = this.findProduct(productId);
        const updatedProduct = {...product};

        if(productTitle){
            updatedProduct.title = productTitle;
        }
        if(productDescription){
            updatedProduct.description = productDescription;
        }
        
        if(productPrice){
            updatedProduct.price = productPrice;
        }
         
        this.products[index] = updatedProduct;
    }

    deleteSingleProduct(productId:string){
        const index = this.findProduct(productId)[1];
        this.products.splice(index,1);
    }

}