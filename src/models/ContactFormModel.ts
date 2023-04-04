export interface ValuesModel {
   firstName: string;
   lastName: string;
   email: string;
   phone: string;
   message: string;
}
export interface ContactErrorsModel {
   firstName?: string;
   lastName?: string;
   email?: string;
   phone?: string;
   message?: string;
}
export type InputNameModel =
   | "firstName"
   | "lastName"
   | "email"
   | "phone"
   | "message";

export type SentStatusModel = null | "success" | "fail";
