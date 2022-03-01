/* eslint-disable prefer-destructuring */
import 'dotenv/config';

const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI;

export { PORT, MONGODB_URI };