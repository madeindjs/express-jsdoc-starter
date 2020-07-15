import { Request, Response } from 'express'

export default class IndexController {
  /**
   * @param {Request} req 
   * @param {Response} res 
   * @param {Function} next 
   * @returns {void}
   */
  index(req, res, next) {
    res.render('index', { title: 'Express' })
  }

  /**
   * @param {Request} req 
   * @param {Response} res 
   * @returns {void}
   */
  msg(req, res) {
    res.json({ msg: 'Hello!' })
  }
}

export const indexController = new IndexController()
