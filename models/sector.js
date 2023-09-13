import { model, models, Schema } from "mongoose";

const SectorSchema = new Schema({
    sectors: [{
        value: String,
        name: String,
      }]
});

const Sector = models.Sector || model("Sector", SectorSchema);
export default Sector;