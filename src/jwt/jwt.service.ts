import { Inject, Injectable } from '@nestjs/common';
import { JwtModuleOptions } from './jwt-module-options.interfaces';
//import { CONFIG_OPTIONS } from './jwt.constants';

@Injectable()
export class JwtService {
  constructor(@Inject('BANANAS') private readonly options: JwtModuleOptions) {
    console.log(options);
  }
  hello() {
    console.log('hello');
  }
}
