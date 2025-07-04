import { Injectable, Logger } from '@nestjs/common';
import { UserDocument } from './models/user.schema';
import { AbstractRepository } from '@app/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UserRespository extends AbstractRepository<UserDocument> {
  protected readonly logger = new Logger(UserRespository.name);

  constructor(@InjectModel(UserDocument.name) userModel: Model<UserDocument>) {
    super(userModel);
  }
}
