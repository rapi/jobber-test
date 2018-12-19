import {
  get
} from './requests'
import {
  JOBS_CATEGORIES
} from '@/constants/api'
export const fetchCategories = (params) => get(JOBS_CATEGORIES)
  .then(result => result.data)
