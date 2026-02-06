export type ActionResult = { message: string } | undefined;

export type ActionFunction = (
  prevState: any,
  formdata: FormData
) => Promise<ActionResult>;
