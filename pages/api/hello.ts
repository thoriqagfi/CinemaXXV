// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import connection from '../../lib/db';

type Data = {
  id: number;
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // connection.query('SELECT * FROM movies', function (err, result, fields) {
  //   if (err){
  //     res.status(500).json({ error: err });
  //   }
  //   const data = result as Data[];
  //   res.status(200).json(data);
  // });
  connection.connect((e) => {
    if (e) {
      res.status(500).json({ error: e });
      return;
    }
    console.log("Database connected!");
  })
}