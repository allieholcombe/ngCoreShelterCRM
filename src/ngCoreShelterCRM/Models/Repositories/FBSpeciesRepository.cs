using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngCoreShelterCRM.Models.Repositories
{
    public class FBSpeciesRepository
    {
        protected static SpeciesDataAccess dataAccess = new SpeciesDataAccess();

        protected static SpeciesTransform transform = new SpeciesTransform();

        /// <summary>
        /// Gets all species from database
        /// </summary>
        /// <returns>Task List of Species Objects</returns>
        public async Task<List<Species>> Species()
        {
            var species = await dataAccess.RetrieveSpecies();

            var speciesList = await transform.TransformPets(species);

            return speciesList;
        }

        /// <summary>
        /// Gets single species from database using id/key
        /// </summary>
        /// <param name="id">ID/Key of species</param>
        /// <returns>Task/single species object</returns>
        public async Task<Pet> GetSpecies(string id)
        {
            var species = await dataAccess.RetrieveSpeciesById(id);

            //should use transformatio service, don't know how to access key
            species.Key = id;

            return species;
        }
    }
}
