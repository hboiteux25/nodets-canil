import {Request, Response} from 'express';

import { Pet } from '../models/pet';
import {createMenuObject} from '../helpers/createMenuObject';

export const search = (req: Request, res: Response) =>{
    //res.render('pages/page');
    let query: string = req.query.q as string;

    let list = Pet.getFromName(query)

    res.render('page/page', {
        manu: createMenuObject(''),
        list

    });
}