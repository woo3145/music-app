interface FirebaseError extends Error {
  code: string;
  customData?: Record<string, unknown> | undefined;
  name: string;
}

const isFirebaseError = (error: unknown): error is FirebaseError => {
  return (
    error instanceof Error &&
    'name' in error &&
    'code' in error &&
    typeof (error as Record<string, unknown>).code === 'string' &&
    (error as Record<string, unknown>).name === 'FirebaseError'
  );
};

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

/**
 * unknown 객체를 Error 객체로 검증
 * (에러내용을 message 프로퍼티에 통합함)
 */
export const toErrorWithMessage = (maybeError: unknown): Error => {
  // firebase 에러일 경우 code에 에러 메세지가 담김
  if (isFirebaseError(maybeError)) {
    return new Error(maybeError.code);
  }
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
