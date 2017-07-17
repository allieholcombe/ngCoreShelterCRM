using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Http;
using ngCoreShelterCRM.Models;
using Firebase.Database;
using Newtonsoft.Json;

namespace ngCoreShelterCRM.Services.Pets
{
    public class PetTransform
    {
        public async Task<List<Pet>> TransformPets(List<FirebaseObject<Pet>> pets)
        {
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

        public async Task<Pet> JsonToPet(string data)
        {
            Pet newPet = JsonConvert.DeserializeObject<Pet>(data);

            return newPet;
        }
    }
}
