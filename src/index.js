import { config } from 'dotenv';
config();

import { history, routes } from './core/router';
history.push(routes.propertyList);
