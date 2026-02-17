export type ActionResult = { message: string } | undefined;
import { PROJECTS_QUERY_RESULT } from '@/app/sanity/types';

export type ActionFunction = (
  prevState: any,
  formdata: FormData
) => Promise<ActionResult>;

export type ProjectProps = PROJECTS_QUERY_RESULT[number];
