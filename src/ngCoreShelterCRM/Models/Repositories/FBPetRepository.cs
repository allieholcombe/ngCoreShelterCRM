using Firebase.Database;
using Firebase.Database.Query;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ngCoreShelterCRM.Services.Pets;

namespace ngCoreShelterCRM.Models.Repositories
{
    public class FBPetRepository : IPetRepository
    {
        protected static FirebaseClient db = new FirebaseClient("https://usingwithcsharp.firebaseio.com/");

        protected static PetDataAccess dataAccess = new PetDataAccess();

        /// <summary>
        /// Gets all pets from database
        /// </summary>
        /// <returns>Task List of Pet Objects</returns>
        public async Task<List<Pet>> Pets()
        {
            var pets = await dataAccess.Pets();

            List<Pet> petList = new List<Pet>();

            //needs transform layer
            foreach (var pet in pets)
            {
                Pet currentPet = new Pet();
                currentPet.Name = $"{ pet.Object.Name }";
                currentPet.Key = $"{ pet.Key }";
                petList.Add(currentPet);
            }

            return petList;
        }

        /// <summary>
        /// Gets single pet from database using id/key
        /// </summary>
        /// <param name="id">ID/Key of pet</param>
        /// <returns>Task/single pet object</returns>
        public async Task<Pet> GetPet(string id)
        {
            var pet = await dataAccess.GetPet(id);

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
            Pet newPet = JsonConvert.DeserializeObject<Pet>(data);
          
            newPet.Key = await dataAccess.AddPet(newPet);

            return newPet;
            //This method will eventually return a success/fail code
        }
    }
}
