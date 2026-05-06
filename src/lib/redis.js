import Redis from 'ioredis';

const redisClient = () => {
  if (process.env.REDIS_URL) {
    return new Redis(process.env.REDIS_URL);
  }
  
  console.warn('REDIS_URL not found in .env, falling back to default localhost');
  return new Redis();
};

const redis = global.redis || redisClient();

if (process.env.NODE_ENV !== 'production') {
  global.redis = redis;
}

export default redis;
