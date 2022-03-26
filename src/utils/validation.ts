type IValidatorRes = {
  msg: string;
  isError: boolean;
};
export namespace validation {
  export const email = (email: string): IValidatorRes => {
    const emailEx =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    return emailEx.test(email)
      ? { msg: '', isError: false }
      : { msg: '이메일 형식이 맞지 않습니다.', isError: true };
  };

  export const password = (password: string): IValidatorRes => {
    // Minimum eight characters, at least one letter and one number:
    // "^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$"

    // Minimum eight characters, at least one letter, one number and one special character:
    // "^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"

    // Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:
    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"

    // Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"

    // Minimum eight and maximum 10 characters, at least one uppercase letter, one lowercase letter, one number and one special character:
    // "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

    const passwordEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

    return passwordEx.test(password)
      ? { msg: '', isError: false }
      : { msg: '첫글자 대문자, 최소 8글자 이상으로 작성해 주세요.', isError: true };
  };
  // export const birthday = (birthday: string): IValidatorRes => {
  //   const birthdayEx = /^((19|20)[0-9][0-9])-(0[0-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/g;
  //   =
  //   return;
  // };

  // export const phoneNum = (phone: string): IValidatorRes => {
  //   return;
  // };
  // export const phoneNum = (phone: string): IValidatorRes => {
  //   return;
  // };
  // export const phoneNum = (phone: string): IValidatorRes => {
  //   return;
  // };
  // export const phoneNum = (phone: string): IValidatorRes => {
  //   return;
  // };
}
