import Movie from '../models/Movie';

class MovieController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const movies = await Movie.findAll({
      attributes: ['id', 'title', 'director'],
      limit: 20,
      offset: (page - 1) * 20,
    });
    return res.json(movies);
  }

  async show(req, res) {
    const movie = await Movie.findOne({
      where: { title: req.query.title },
      attributes: ['id', 'title', 'director'],
    });
    return res.json(movie);
  }
}

export default new MovieController();
