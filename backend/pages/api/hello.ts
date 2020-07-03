import { NextApiRequest, NextApiResponse } from 'next'

type Todo = {
  data: string,
  date: Date,
  completed: Boolean
}

export default (req: NextApiRequest, res: NextApiResponse<Todo>) => {
  res.status(200).json({ data: 'Todo App', date: new Date(), completed: false })
}
