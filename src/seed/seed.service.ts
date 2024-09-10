import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  fillDB() {
    return 'This action fills the DB with data';
  }
}
