import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  //Metodo para saludar en Ingles
  getHello(): string {
    return 'Hello World!';
  }

  //Metodo para saludar en Español
  getHola(): string {
    return 'Hola Mundo!';
  }
}
