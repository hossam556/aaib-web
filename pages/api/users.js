// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { data } from "../../utils/data";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "POST") {
    const user = req.body.name;
    const newUser = {
      id: Date.now(),
      name: user,
    };
    data.push(newUser); //data base
    res.status(201).json(newUser);
  }
}
