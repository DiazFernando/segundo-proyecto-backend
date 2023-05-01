import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Controlador Saludo en Ingles
  @Get("/saludoIngles")
  getHello(): string {
    return this.appService.getHello();
  }

  //Controlador Saludo en Español
  @Get("/saludoEsp")
  getHola(): string {
    return this.appService.getHola();
  }
}
