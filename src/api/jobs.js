import {
  JOBS
} from '@/constants/api'
import {
  get
} from './requests'
export const fetch = (params) => get(JOBS, params)
