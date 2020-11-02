import { Controller,Post,Body } from "@nestjs/common";
import {ProductsService} from "./products.service";

// @Constrolleur permet de créer un controlleur sur une route spécifique
// Attention: 
//    - toutes les requetes sur la route /products passeront ici 
//      même si la requete est de type /products/blablabla
@Controller("products")
export class ProductsController {
    constructor(private productsService:ProductsService){

    }

    // @Post est une requete post sur un chemin nom spécifié. Ce chemin sera donc par défaut "monsite.com/"
    @Post()
    addProduct(
        // @Body est une annotation qui permet de récupérer les parametres d'une url, de le parser et de l'ajouter dans un variable

        // Rq: la syntaxe "variable : type" est du typescript
        @Body('title') prodTitle : string,
        @Body('description') prodDescription: string,
        @Body('price') prodPrice: number
    ): any{

        const generatedId = this.productsService.insertProduct(prodTitle,prodDescription,prodPrice);
        return {id:generatedId};

    };
}