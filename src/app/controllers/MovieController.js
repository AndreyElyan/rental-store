import Movie from '../models/Movie';

const attributes = ['id', 'title', 'director'];
const limit = 20;

class MovieController {
  async index(req, res) {
    const { page = 1 } = req.query;

    try {
      const movies = await Movie.findAll({
        attributes,
        limit,
        offset: (page - 1) * limit,
      });

      return res.json(movies);
    } catch (err) {
      return res.status(500).json({ message: 'Erro Internal' });
    }
  }

  async show(req, res) {
    try {
      const movie = await Movie.findOne({
        where: { title: req.query.title },
        attributes,
      });

      return res.json(movie);
    } catch (err) {
      return res.status(500).json({ message: 'Erro Internal' });
    }
  }
}

export default new MovieController();
