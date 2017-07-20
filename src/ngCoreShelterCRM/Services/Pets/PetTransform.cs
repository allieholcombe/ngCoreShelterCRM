using System.Collections.Generic;
using System.Threading.Tasks;
using ngCoreShelterCRM.Models;
using Firebase.Database;
using Newtonsoft.Json;
using System.Reflection;
using System;
using System.Linq;

namespace ngCoreShelterCRM.Services.Pets
{
    public class PetTransform
    {
        public async Task<List<Pet>> TransformPets(List<FirebaseObject<Pet>> pets)
        {
            List<Pet> petList = new List<Pet>();

            foreach (var pet in pets)
            {
                Pet currentPet = new Pet();
                currentPet.Key = $"{ pet.Key }";

                if ($"{pet.Object.Name}" != null)
                {
                    currentPet.Name = $"{ pet.Object.Name }";
                }
                else
                {
                    currentPet.Name = "";
                }

                if ($"{pet.Object.Sex}" != null)
                {
                    currentPet.Sex = $"{ pet.Object.Sex }";
                }
                else
                {
                    currentPet.Sex = "";
                }

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
