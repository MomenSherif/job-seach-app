import axios from './axiosInstance';

import { Job } from '@types';

export const getJobs = ({ limit = 12, offset = 0 } = {}): Promise<Job[]> =>
  axios.get('/jobs', { params: { limit, offset } });
