import { Router, Response, Request } from 'express'
import Workspace, { IWorkspace, TWorkspace } from '../../models/Workspace'

const router: Router = Router()

router.post('/', async (req: Request, res: Response) => {
  const query = await Workspace.find({
    userName: 'tzhangm@trip.com',
  })
  // console.log(query,'query')
  res.send(query)
})

export default router
