import { Document, model, Schema } from 'mongoose'

export type TWorkspace = {
  workspaceName: string
}

export interface IWorkspace extends TWorkspace, Document {}

const workspaceSchema: Schema = new Schema({
  userName: {
    type: String,
    required: true,
  },
})

const Workspace = model<IWorkspace>(
  'Workspace',
  workspaceSchema,
  'UserWorkspace',
)

export default Workspace
