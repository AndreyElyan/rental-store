import * as Yup from 'yup';
import Rent from '../models/Rent';

class RentController {
  async store(req, res) {
    const schema = Yup.object({
      disk_id: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { disk_id } = req.body;

    const rent = await Rent.create({
      user_id: req.userId,
      disk_id,
      rented_at: Date.now(),
      canceled_at: null,
    });
    return res.json(rent);
  }

  async update(req, res) {
    const { id } = req.params;

    const rent = await Rent.findOne({ where: { id } });

    await rent.update({ returned_at: Date.now() });
    return res.json({ Response: 'Movie returned' });
  }
}

export default new RentController();
