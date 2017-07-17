using System.Collections.Generic;
using System.Threading.Tasks;
using ngCoreShelterCRM.Services.Pets;

namespace ngCoreShelterCRM.Models.Repositories
{
    public class FBPetRepository : IPetRepository
    {
        protected static PetDataAccess dataAccess = new PetDataAccess();

        protected static PetTransform transform = new PetTransform();

        /// <summary>
        /// Gets all pets from database
        /// </summary>
        /// <returns>Task List of Pet Objects</returns>
        public async Task<List<Pet>> Pets()
        {
            var pets = await dataAccess.RetrievePets();

            var petList = await transform.TransformPets(pets);

            return petList;
        }

        /// <summary>
        /// Gets single pet from database using id/key
        /// </summary>
        /// <param name="id">ID/Key of pet</param>
        /// <returns>Task/single pet object</returns>
        public async Task<Pet> GetPet(string id)
        {
            var pet = await dataAccess.RetrievePetById(id);

            //should use transformatio service, don't know how to access key
            pet.Key = id;

            return pet;
        }

        /// <summary>
        /// Add single pet to databases
        /// </summary>
        /// <param name="data">ID/Key of pet</param>
        /// <returns>Pet added to db with key</returns>
        public async Task<Pet> AddPet(string data)
        {
            //this should call a transformation service
            Pet newPet = await transform.JsonToPet(data);
          
            newPet.Key = await dataAccess.AddPet(newPet);

            return newPet;
            //This method will eventually return a success/fail code
        }
    }
}
