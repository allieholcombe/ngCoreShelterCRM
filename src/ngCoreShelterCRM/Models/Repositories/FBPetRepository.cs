using Firebase.Database;
using Firebase.Database.Query;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ngCoreShelterCRM.Models.Repositories
{
    public class FBPetRepository : IPetRepository
    {
        protected static FirebaseClient db = new FirebaseClient("https://usingwithcsharp.firebaseio.com/");

        /// <summary>
        /// Trying design patterns and failing w/headache, gets list of pets from firebase
        /// </summary>
        /// <returns>List of Pet Objects</returns>
        public async Task<List<Pet>> Pets()
        {
            var pets = await db
              .Child("pets")
              .OrderByKey()
              .OnceAsync<Pet>();

            List<Pet> petList = new List<Pet>();

            foreach (var pet in pets)
            {
                Pet currentPet = new Pet();
                currentPet.Name = $"{ pet.Object.Name }";
                currentPet.Key = $"{ pet.Key }";
                petList.Add(currentPet);
            }

            return petList;
        }

        public async Task<Pet> GetPet(string id)
        {
            var pet = await db
                .Child("pets")
                .Child(id)
                .OnceSingleAsync<Pet>();

            pet.Key = id;

            return pet;
        }

        public async Task<Pet> AddPet(string data)
        {
            //this should call a transformation service
            Pet newPet = JsonConvert.DeserializeObject<Pet>(data);
                      
            var pet = await db
              .Child("pets")
              .PostAsync(newPet);

            return newPet;
        }
    }
}
