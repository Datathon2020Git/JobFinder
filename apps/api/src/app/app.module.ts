import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { environment } from '../environments/environment';

@Module({
  imports: [
    MongooseModule.forRoot(environment.connectionString, {useNewUrlParser: true})
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule { }
