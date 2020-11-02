import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProducstModule } from './products/products.module';


/*
 Ce fichier est le point d'entré de l'application. 
 NestJs est structuré comme suit :
   - Il existe des module dans lesquel il y'a des controllers qui appelent des services
*/
@Module({
  
  imports: [ProducstModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
