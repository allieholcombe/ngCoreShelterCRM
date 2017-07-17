using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Firebase.Database;
using ngCoreShelterCRM.Models;
using Firebase.Database.Query;

// For more information on enabling MVC for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace ngCoreShelterCRM.Services.Pets
{
    public class PetDataAccess
    {
        protected static FirebaseClient db = new FirebaseClient("https://usingwithcsharp.firebaseio.com/");

        public async Task<List<FirebaseObject<Pet>>> Pets()
        {
            var pets = await db
              .Child("pets")
              .OrderByKey()
              .OnceAsync<Pet>();
            return pets.ToList();
        }

        public async Task<Pet> GetPet(string id)
        {
            var pet = await db
                .Child("pets")
                .Child(id)
                .OnceSingleAsync<Pet>();

            return pet;
        }

        public async Task<string> AddPet(Pet pet)
        {
            //should return success/fail, currently returns key
            var newPet = await db
                .Child("pets")
                .PostAsync(pet);

            return newPet.Key;
        }
    }
}
