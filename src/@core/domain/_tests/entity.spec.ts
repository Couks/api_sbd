import { Entity } from '../entity';

describe('Entity Unit Tests', () => {
  const id = '123';
  const createdAt = new Date();
  const updatedAt = new Date();

  it('should create an entity with valid id', () => {
    const entity = new Entity(id, createdAt, updatedAt);
    expect(entity.id).toBe(id);
  });

  it('should create an entity with valid createdAt', () => {
    const entity = new Entity(id, createdAt, updatedAt);
    expect(entity.createdAt).toEqual(createdAt);
  });

  it('should create an entity with valid updatedAt', () => {
    const entity = new Entity(id, createdAt, updatedAt);
    expect(entity.updatedAt).toEqual(updatedAt);
  });
});
