import Plant from "../models/Plant.js";

export const getPlant = async (req, res) => {
  try {
    const { label } = req.params;
    const plant = await Plant.find({"PlantType":label}).sort({ Date: 1 });
    res.status(200).json(plant);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {

    
    const totalPlants = await Plant.countDocuments();
    
    const distinctPlantsName = await Plant.distinct("PlantType");
    const allPlants = await Plant.find().limit(100).sort({ Date: -1 }); 
    const PlantsPerCount = {};
    const result  = await Plant.aggregate([
      {
          $group: {
              _id: null,
              averageHealthScore: { $avg: '$HealthScore' }
          }
      }
    ]);
    const averageHealthScore = result[0].averageHealthScore.toFixed(2)

    for (const plant of distinctPlantsName) {
      const count = await Plant.countDocuments({ ["PlantType"]: plant });
      PlantsPerCount[plant] = count;
    }

    res.status(200).json({
        totalPlants,
        PlantsPerCount,
        averageHealthScore,
        allPlants
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default {getPlant , getDashboardStats}