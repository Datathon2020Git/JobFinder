import { Message } from '@job-finder/api-interfaces';
import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import * as mongoose from 'mongoose';
@Injectable()
export class AppService {
  getData(): Message {
    return { message: 'Welcome to api!' };
  }
  initializeData() {
    // Endless process - try another methon
    throw new Error('Should never initialize db from insert many');
    let occupationSchema = new mongoose.Schema({}, { strict: false, collection: 'Occupations' });
    console.log(__dirname);

    let rawData = readFileSync(__dirname + '/assets/occupations.json') as any;
    const jsonData = JSON.parse(rawData);
    console.log(jsonData);
    const model = mongoose.model('Occupations', occupationSchema);
    return model.insertMany(rawData);
  }
}
