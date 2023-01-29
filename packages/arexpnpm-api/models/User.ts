import { Document, model, Schema } from 'mongoose'

/**
 * Type to model the User Schema for TypeScript.
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export type TUser = {
  userName: string
}

/**
 * Mongoose Document based on TUser for TypeScript.
 * https://mongoosejs.com/docs/documents.html
 *
 * TUser
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

export interface IUser extends TUser, Document {}

const userSchema: Schema = new Schema({
  userName: {
    type: String,
    required: true,
  },
})

/**
 * Mongoose Model based on TUser for TypeScript.
 * https://mongoosejs.com/docs/models.html
 *
 * TUser
 * @param email:string
 * @param password:string
 * @param avatar:string
 */

const User = model<IUser>('User', userSchema, 'User')

export default User
