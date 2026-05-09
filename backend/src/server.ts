import app from './app';
import { connectDB } from './config/db';
import { env } from './config/env';
import { connectRedis} from './config/redis';

connectDB();
connectRedis().catch(console.error);

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`);
});