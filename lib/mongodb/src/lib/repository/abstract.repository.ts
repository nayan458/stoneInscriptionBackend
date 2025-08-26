import { Connection, Model } from 'mongoose';
import { AbstractDocument } from '../schema/abstract.schema';

export abstract class AbstractRepository<TDocument extends AbstractDocument> {
  constructor(
    protected readonly model: Model<TDocument>,
    protected readonly connection: Connection
  ) {}

  // create
  // read_All
  // read_One
  // update_One
  // upsert
  // find_any
  // transerction
}
