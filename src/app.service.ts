import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  desafioNestjsDocker(): string {
    return 'Desafio Nestjs + Docker';
  }
}
