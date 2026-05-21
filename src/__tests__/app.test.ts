import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  it('200を返す', async () => {
    const res = await request(app).get('/');
    expect(res.status).toBe(200);
  });

  it('messageフィールドを含むJSONを返す', async () => {
    const res = await request(app).get('/');
    expect(res.body).toHaveProperty('message');
    expect(typeof res.body.message).toBe('string');
  });

  it('timestampフィールドを含む', async () => {
    const res = await request(app).get('/');
    expect(res.body).toHaveProperty('timestamp');
  });
});
