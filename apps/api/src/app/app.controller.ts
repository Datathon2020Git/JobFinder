import { Controller, Get } from '@nestjs/common';

import { Message } from '@job-finder/api-interfaces';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get('')
  getData(): Message {
    return this.appService.getData();
  }
  @Get('initData')
  initData() {
    return this.appService.initializeData().then(res => {
      console.log(res)
      return 'operation Succesfull'
    });
  }
}
