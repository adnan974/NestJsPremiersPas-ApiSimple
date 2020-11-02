import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

// Ceci est un module pour une api qui permet d'ajouter des produits
@Module(
    {
        // Ce module est composé de ce controller
        controllers: [ProductsController],
        // Ce module est composé de ce service
        providers: [ProductsService]
        
    }
)
export class ProducstModule{

}