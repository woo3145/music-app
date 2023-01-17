const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

/**
 * unknown 객체를 Error 객체로 검증
 * (에러내용을 message 프로퍼티에 통합함)
 */
export const toErrorWithMessage = (maybeError: unknown): Error => {
  if (isError(maybeError)) {
    return maybeError;
  }
  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    return new Error(String(maybeError));
  }
};

/**
 * 에러 객체의 message를 가져온다.
 */
export const getErrorMessage = (error: unknown): string => {
  return toErrorWithMessage(error).message;
};

export const secondsToMinutesAndSeconds = (time: number): string => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time) - minutes * 60;

  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
